import { takeEvery, call, put, takeLeading } from 'redux-saga/effects';
import { ADD_POST, GET_POSTS } from '../constants';
import { addPost, getPosts } from '../../utils/api';
import { addPostFailed, addPostSuccess, getPostsFailed, getPostsSuccess } from '../actions/Posts.actions';

export function* getPostSaga() {
    try {
        const data = yield call(getPosts); // on attend de récupérer les post avant de passer à la suite
        yield put(getPostsSuccess(data));
    } catch (error) {
        yield put(getPostsFailed(error.message));
    }
}

function* addPostSaga(action) {
    try {
        const data = yield call(addPost, action.payload);
        yield put(addPostSuccess({ ...action.payload, ...data }));
    } catch (error) {
        yield put(addPostFailed(error.message));
    }
}

// On appel getPostSaga chaque fois que GET_POSTS est envoyé
export function* getPostsWatcher() {
    yield takeEvery(GET_POSTS, getPostSaga);
}

export function* addPostWatcher() {
    yield takeLeading(ADD_POST, addPostSaga);
}

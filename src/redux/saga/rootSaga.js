import { all } from 'redux-saga/effects';
import { addPostWatcher, getPostsWatcher } from './Posts.saga';

export default function* postsSaga() {
    // Crée un d'effet qui demande au middleware d'exécuter plusieurs effets en parallèle et d'attendre qu'ils se terminent tous.
    yield all([getPostsWatcher(), addPostWatcher()]);
}

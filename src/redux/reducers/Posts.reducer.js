import { GET_POSTS, GET_POSTS_SUCCESS } from '../constants';

const initialState = {
    isLoading: false,
    posts: [],
    error: null,
};

const postsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                isLoading: true,
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: payload,
            };
        default:
            return state;
    }
};

export default postsReducer;

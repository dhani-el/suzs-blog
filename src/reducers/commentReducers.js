import { 
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILED,
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAILED,
 } from "../constants/commentConstants";

export const fetchCommentsReducer = (state = { loading: true, comments: [] }, action) => {
    switch (action?.type) {
        case FETCH_COMMENTS_REQUEST:
            return { ...state, loading: true };
        case FETCH_COMMENTS_SUCCESS:
            return { loading: false, comments: action?.payload };
        case FETCH_COMMENTS_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}
export const postCommentsReducer = (state = { loading: true}, action) => {
    switch (action?.type) {
        case POST_COMMENT_REQUEST:
            return { ...state, loading: true };
        case POST_COMMENT_SUCCESS:
            return { loading: false };
        case POST_COMMENT_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}
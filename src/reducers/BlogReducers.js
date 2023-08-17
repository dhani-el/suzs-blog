import {
    FECTH_BLOG_FAILED,
    FECTH_BLOG_REQUEST,
    FECTH_BLOG_SUCCESS,
    SEARCH_BLOG_FAILED,
    SEARCH_BLOG_REQUEST,
    SEARCH_BLOG_SUCCESS,
    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAILED,
    LIKE_BLOG_REQUEST,
    LIKE_BLOG_SUCCESS,
    LIKE_BLOG_FAILED,
    UNLIKE_BLOG_REQUEST,
    UNLIKE_BLOG_SUCCESS,
    UNLIKE_BLOG_FAILED,
    LIKES_COUNT_REQUEST,
    LIKES_COUNT_SUCCESS,
    LIKES_COUNT_FAILED,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAILED,
    FETCH_GENRE_REQUEST,
    FETCH_GENRE_SUCCESS,
    FETCH_GENRE_FAILED,
} from "../constants/blogConstants";

export const fetchBlogReducer = (state = { loading: true, blogs: [] }, action) => {
    switch (action?.type) {
        case FECTH_BLOG_REQUEST:
            return { ...state, loading: true };
        case FECTH_BLOG_SUCCESS:
            return { loading: false, blogs: action?.payload };
        case FECTH_BLOG_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}

export const searchBlogReducer = (state = { loading: true, searched: [] }, action) => {
    switch (action?.type) {
        case SEARCH_BLOG_REQUEST:
            return { ...state, loading: true };
        case SEARCH_BLOG_SUCCESS:
            return { loading: false, searched: action?.payload };
        case SEARCH_BLOG_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}

export const fetchBlogDetailsReducer = (state = { loading: true, blogDetails: {} }, action) => {
    switch (action?.type) {
        case BLOG_DETAILS_REQUEST:
            return { ...state, loading: true };
        case BLOG_DETAILS_SUCCESS:
            return { loading: false, blogDetails: action?.payload };
        case BLOG_DETAILS_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}

export const likeBlogReducer = (state = { loading: true, liked: {} }, action) => {
    switch (action?.type) {
        case LIKE_BLOG_REQUEST:
            return { ...state, loading: true };
        case LIKE_BLOG_SUCCESS:
            return { loading: false, liked: action?.payload };
        case LIKE_BLOG_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}

export const unlikeBlogReducer = (state = { loading: true, unliked: {} }, action) => {
    switch (action?.type) {
        case UNLIKE_BLOG_REQUEST:
            return { ...state, loading: true };
        case UNLIKE_BLOG_SUCCESS:
            return { loading: false, unliked: action?.payload };
        case UNLIKE_BLOG_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}

export const likesCountReducer = (state = { loading: true, likes: {} }, action) => {
    switch (action?.type) {
        case LIKES_COUNT_REQUEST:
            return { ...state, loading: true };
        case LIKES_COUNT_SUCCESS:
            return { loading: false, likes: action?.payload };
        case LIKES_COUNT_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}
export const deleteBlogReducer = (state = { loading: true, delete: {} }, action) => {
    switch (action?.type) {
        case DELETE_BLOG_REQUEST:
            return { ...state, loading: true };
        case DELETE_BLOG_SUCCESS:
            return { loading: false, delete: action?.payload };
        case DELETE_BLOG_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}

export const fetchGenreReducer = (state = { loading: true, blogs: [] }, action) => {
    switch (action?.type) {
        case FETCH_GENRE_REQUEST:
            return { ...state, loading: true };
        case FETCH_GENRE_SUCCESS:
            return { loading: false, blogs: action?.payload };
        case FETCH_GENRE_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}
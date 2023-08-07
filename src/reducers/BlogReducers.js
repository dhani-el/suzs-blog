import {
    FECTH_BLOG_FAILED,
    FECTH_BLOG_REQUEST,
    FECTH_BLOG_SUCCESS,
    SEARCH_BLOG_FAILED,
    SEARCH_BLOG_REQUEST,
    SEARCH_BLOG_SUCCESS
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
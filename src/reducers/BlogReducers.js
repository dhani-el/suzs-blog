import {
    FECTH_BLOG_FAILED,
    FECTH_BLOG_REQUEST,
    FECTH_BLOG_SUCCESS
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
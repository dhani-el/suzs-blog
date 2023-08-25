import { 
    POST_BLOG_FAILED, 
    POST_BLOG_REQUEST, 
    POST_BLOG_SUCCESS 
} from "../constants/adminConstants";

export const postBlogReducer = (state = { loading: true, blog: {} }, action) => {
    switch (action?.type) {
        case POST_BLOG_REQUEST:
            return { ...state, loading: true };
        case POST_BLOG_SUCCESS:
            return { loading: false, blog: action?.payload };
        case POST_BLOG_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}
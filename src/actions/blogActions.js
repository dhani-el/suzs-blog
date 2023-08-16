import Axios from "axios";
import { toast } from "react-toastify";
import {
    SEARCH_BLOG_FAILED,
    SEARCH_BLOG_REQUEST,
    SEARCH_BLOG_SUCCESS,
    FECTH_BLOG_FAILED,
    FECTH_BLOG_REQUEST,
    FECTH_BLOG_SUCCESS,
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
} from "../constants/blogConstants";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const customId = "custom-id-yes";

// console.log(process.env.REACT_APP_BASE_URL);

export const fetchBlog = ({ id }) => async (dispatch) => {
    dispatch({
        type: FECTH_BLOG_REQUEST,
    });
    try {
        const { data } = await Axios.get(`https://zeesblog.onrender.com/blogs/${id}`, {});
        dispatch({
            type: FECTH_BLOG_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FECTH_BLOG_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        toast.error(
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            {
                toastId: customId,
            }
        );
    }
}

export const searchBlog = ({ searchTerm }) => async (dispatch) => {
    dispatch({
        type: SEARCH_BLOG_REQUEST,
    });
    try {
        const { data } = await Axios.get(`https://zeesblog.onrender.com/blogs/search/${searchTerm}`, {
            headers: {
                credentials: "include"
            }
        });
        dispatch({
            type: SEARCH_BLOG_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: SEARCH_BLOG_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        toast.error(
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            {
                toastId: customId,
            }
        );
    }
}

export const fetchBlogDetails = (blog_id) => async (dispatch) => {
    dispatch({
        type: BLOG_DETAILS_REQUEST,
    });
    try {
        const {data} = await Axios.get(`https://zeesblog.onrender.com/blogs/post/${blog_id}`, {});
        dispatch({
            type: BLOG_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: BLOG_DETAILS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        toast.error(
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            {
                toastId: customId,
            }
        );
    }
} 

export const likeBlog = (blog_title) => async (dispatch) => {
    dispatch({
        type: LIKE_BLOG_REQUEST,
    });
    try {
        const {data} = await Axios.post(`https://zeesblog.onrender.com/likes/post`, {
            // body
            blog_title
        },
        {
            credentials:"include",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        dispatch({
            type: LIKE_BLOG_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LIKE_BLOG_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        toast.error(
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            {
                toastId: customId,
            }
        );
    }
}

export const unLikeBlog = (blog_title) => async (dispatch) => {
    dispatch({
        type: UNLIKE_BLOG_REQUEST,
    });
    try {
        const {data} = await Axios.delete(`https://zeesblog.onrender.com/likes/delete`, {
            // body
            blog_title
        },
        {
            credentials:"include",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        dispatch({
            type: UNLIKE_BLOG_SUCCESS,
            payload: data,
        });
        toast.success("Blog Deleted", {
            toastId: customId,
        });
    } catch (error) {
        dispatch({
            type: UNLIKE_BLOG_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        toast.error(
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            {
                toastId: customId,
            }
        );
    }
}

export const fetchBlogLikes = (blog_title) => async (dispatch) => {
    dispatch({
        type: LIKES_COUNT_REQUEST,
    });
    try {
        const {data} = await Axios.get(`https://zeesblog.onrender.com/likes/${blog_title}`, {
            credentials: "include",
        });
        dispatch({
            type: LIKES_COUNT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LIKES_COUNT_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        toast.error(
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            {
                toastId: customId,
            }
        );
    }
}

export const deleteBlog = ({id}) => async (dispatch) => {
    dispatch({
        type: DELETE_BLOG_REQUEST,
    });
    try {
        const {data} = await Axios.delete(`https://zeesblog.onrender.com/admin/delete/${id}`, {
            credentials:'include',
        });
        dispatch({
            type: DELETE_BLOG_SUCCESS,
            payload: data
        });
        toast.success("Blog Deleted", {
            toastId: customId,
        });
    } catch (error) {
        dispatch({
            type: DELETE_BLOG_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        toast.error(
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            {
                toastId: customId,
            }
        );
    }
}
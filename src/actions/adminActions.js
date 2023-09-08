import Axios from "axios";
import { toast } from "react-toastify";
import {
    POST_BLOG_FAILED,
    POST_BLOG_REQUEST,
    POST_BLOG_SUCCESS
} from "../constants/adminConstants";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const customId = "custom-id-yes";

export const postBlog = ({ title, body, genre, readTime, date, image }) => async (dispatch) => {
    dispatch({
        type: POST_BLOG_REQUEST,
    });
    console.log(image);
    try {
        const { data } = await Axios.post(`/admin/api/post`, {
            title: `${title}`,
            body: `${body}`,
            genre: `${genre}`,
            readTime: `${readTime}`,
            date: `${date}`,
            image: image,
        }, {
            withCredentials: true,
            credentials : "include",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });
        dispatch({
            type: POST_BLOG_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: POST_BLOG_FAILED,
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
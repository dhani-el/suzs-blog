import Axios from "axios";
import { toast } from "react-toastify";
import {
    FECTH_BLOG_FAILED,
    FECTH_BLOG_REQUEST,
    FECTH_BLOG_SUCCESS
} from "../constants/blogConstants";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const customId = "custom-id-yes";

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
import Axios from "axios";
import { toast } from "react-toastify";
import { FETCH_COMMENTS_FAILED, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, POST_COMMENT_FAILED, POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS } from "../constants/commentConstants";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const customId = "custom-id-yes";

export const fetchComments = (title, pag) => async (dispatch) => {
    dispatch({
        type: FETCH_COMMENTS_REQUEST,
    });
    try {
        const {data} = await Axios.get(`https://zeesblog.onrender.com/comments/${title}/${pag}`, {
            credentials: "include",
        });
        dispatch({
            type: FETCH_COMMENTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_COMMENTS_FAILED,
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

export const postComment = ({comment}) => async (dispatch) => {
    dispatch({
        type: POST_COMMENT_REQUEST,
    });
    try {
        const {data} = await Axios.post(`https://zeesblog.onrender.com/comments/post`, {
            comment
        },{
            credentials: "include",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        dispatch({
            type: POST_COMMENT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: POST_COMMENT_FAILED,
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
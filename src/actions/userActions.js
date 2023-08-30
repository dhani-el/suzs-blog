import Axios from "axios";
import { toast } from "react-toastify";
import {
    NEWSLETTER_SUBSCRIPTION_FAILED,
    NEWSLETTER_SUBSCRIPTION_REQUEST,
    NEWSLETTER_SUBSCRIPTION_SUCCESS
} from "../constants/userConstants";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const customId = "custom-id-yes";

export const newsletterSub = ({ email }) => async (dispatch) => {
    dispatch({
        type: NEWSLETTER_SUBSCRIPTION_REQUEST,
    });
    try {
        const { data } = await Axios.post(`/blogs/api/newsletter`,
            { email },
            {
                withCredentials:true,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
        dispatch({
            type: NEWSLETTER_SUBSCRIPTION_SUCCESS,
            payload: data,
        });
        toast.success("Successfully subscribed to newsletter!", {
            toastId: customId,
        });
    } catch (error) {
        dispatch({
            type: NEWSLETTER_SUBSCRIPTION_FAILED,
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
import Axios from "axios";
import { toast } from "react-toastify";
import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS
} from "../constants/authConstants";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const customId = "custom-id-yes";

export const loginUser = ({userName, password}) => async (dispatch) => {
    dispatch({
        type: USER_LOGIN_REQUEST,
    });
    try {
        const { data } = await Axios.post(`${BASE_URL}/auth/login`, { 
            username : `${userName}`,
            password: `${password}`
         }, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAILED,
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
import Axios from "axios";
import { toast } from "react-toastify";
import {
    CHECK_USERNAME_FAILED,
    CHECK_USERNAME_REQUEST,
    CHECK_USERNAME_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
} from "../constants/authConstants";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const customId = "custom-id-yes";

export const loginUser = ({ userName, password }) => async (dispatch) => {
    dispatch({
        type: USER_LOGIN_REQUEST,
    });
    try {
        const { data } = await Axios.post(`${BASE_URL}/auth/api/login`, {
            username: `${userName}`,
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

export const checkUsername = ({ username }) => async (dispatch) => {
    dispatch({
        type: CHECK_USERNAME_REQUEST,
    });
    try {
        const { data } = await Axios.post(`${BASE_URL}/user/api/exists`, {
            username: `${username}`,
        }, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        dispatch({
            type: CHECK_USERNAME_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CHECK_USERNAME_FAILED,
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

export const registerUser = ({ userName, email, password }) => async (dispatch) => {
    dispatch({
        type: REGISTER_USER_REQUEST,
    });
    try {
        const { data } = await Axios.post(`${BASE_URL}/auth/api/signup`, {
            name: `${userName}`,
            email: `${email}`,
            password: `${password}`,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAILED,
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
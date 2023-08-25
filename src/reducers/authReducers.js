import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS
} from "../constants/authConstants";

export const loginUserReducer = (state = { loading: true, check: {} }, action) => {
    switch (action?.type) {
        case USER_LOGIN_REQUEST:
            return { ...state, loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, check: action?.payload };
        case USER_LOGIN_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}
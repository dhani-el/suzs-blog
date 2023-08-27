import {
    CHECK_USERNAME_FAILED,
    CHECK_USERNAME_REQUEST,
    CHECK_USERNAME_SUCCESS,
    REGISTER_USER_FAILED,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
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

export const checkUsernameReducer = (state = { loading: true, validity: {} }, action) => {
    switch (action?.type) {
        case CHECK_USERNAME_REQUEST:
            return { ...state, loading: true };
        case CHECK_USERNAME_SUCCESS:
            return { loading: false, validity: action?.payload };
        case CHECK_USERNAME_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}

export const registerUserReducer = (state = { loading: true, check: {} }, action) => {
    switch (action?.type) {
        case REGISTER_USER_REQUEST:
            return { ...state, loading: true };
        case REGISTER_USER_SUCCESS:
            return { loading: false, check: action?.payload };
        case REGISTER_USER_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}
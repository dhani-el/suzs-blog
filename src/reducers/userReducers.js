import {
    NEWSLETTER_SUBSCRIPTION_FAILED,
    NEWSLETTER_SUBSCRIPTION_REQUEST,
    NEWSLETTER_SUBSCRIPTION_SUCCESS
} from "../constants/userConstants";

export const newsletterSubReducer = (state = { loading: true }, action) => {
    switch (action?.type) {
        case NEWSLETTER_SUBSCRIPTION_REQUEST:
            return { loading: true };
        case NEWSLETTER_SUBSCRIPTION_SUCCESS:
            return { loading: false, subData: action?.payload };
        case NEWSLETTER_SUBSCRIPTION_FAILED:
            return { loading: false, error: action?.payload };
        default:
            return state;
    }
}
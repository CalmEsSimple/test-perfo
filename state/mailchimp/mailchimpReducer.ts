import { AnyAction } from '@reduxjs/toolkit';
import {
    ON_ADD_EMAIL_TO_NEWSLETTER_FAILED,
    ON_ADD_EMAIL_TO_NEWSLETTER_SUCCEEDED,
    ON_SUBSCRIBE_STOCKOUT_SUCCEEDED,
    ON_SUBSCRIBE_STOCKOUT_FAILED,
    ON_CLEAN_ERRORS_NEWSLETTER,
    ON_CLEAN_ERRORS_STOCKOUT
} from "./mailchimpConstants";
import { IMailchimp } from './types';

const initialState: IMailchimp = {
    newsletter: {
        error: false,
        errorMessage: '',
        response: {
            message: ''
        }
    },
    subscribeStockOut: {
        error: false,
        errorMessage: '',
        response: {
            message: ''
        }
    }
}

export default (state = initialState, action: AnyAction) => {

    switch (action.type) {

        case ON_CLEAN_ERRORS_STOCKOUT:
            return {
                ...state,
                subscribeStockOut: {
                    error: false,
                    errorMessage: '',
                    response: {
                        message: ''
                    }
                }
            };

        case ON_CLEAN_ERRORS_NEWSLETTER:
            return {
                ...state,
                newsletter: {
                    error: false,
                    errorMessage: '',
                    response: {
                        message: ''
                    }
                }
            };

        case ON_SUBSCRIBE_STOCKOUT_SUCCEEDED:
            return {
                ...state,
                subscribeStockOut: {
                    ...state.subscribeStockOut,
                    response: action.subscribe,
                }
            };

        case ON_ADD_EMAIL_TO_NEWSLETTER_SUCCEEDED:
            return {
                ...state,
                newsletter: {
                    ...state.newsletter,
                    response: action.newsletter,
                }
            };

        case ON_ADD_EMAIL_TO_NEWSLETTER_FAILED:
            return {
                ...state,
                newsletter: {
                    ...state.newsletter,
                    error: true,
                    errorMessage: action.error && action.error.error ? action.error.error : undefined
                }
            };

        case ON_SUBSCRIBE_STOCKOUT_FAILED:
            return {
                ...state,
                subscribeStockOut: {
                    ...state.subscribeStockOut,
                    error: true,
                    errorMessage: action.error && action.error.error ? action.error.error : undefined
                }
            };

        default:
            return state;
    }
}
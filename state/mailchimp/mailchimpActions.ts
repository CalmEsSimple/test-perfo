import { onNewsletterLoadingFinished, onNewsletterLoadingStart, onSubscribeStockoutLoadingFinished, onSubscribeStockoutLoadingStart } from "../loading/loadingActions";
import {
    ON_ADD_EMAIL_TO_NEWSLETTER_FAILED,
    ON_ADD_EMAIL_TO_NEWSLETTER_SUCCEEDED,
    ON_SUBSCRIBE_STOCKOUT_SUCCEEDED,
    ON_SUBSCRIBE_STOCKOUT_FAILED,
    ON_CLEAN_ERRORS_NEWSLETTER,
    ON_CLEAN_ERRORS_STOCKOUT
} from "./mailchimpConstants";
import { onAddEmailToMailchimp } from "./mailchimpServices";

export const onAddEmailMailchimp: (email: string, tag: string) => (dispatch: any) => Promise<void> = (email: string, tag: string) => {
    return async (dispatch: any) => {
        try {
            if (tag === "footer") {
                dispatch(onNewsletterLoadingStart())
            } else {
                dispatch(onSubscribeStockoutLoadingStart())
            }
            const response: any = await onAddEmailToMailchimp(email, tag);
            if (response && !response.error) {
                if (tag === "footer") {
                    dispatch(onNewsletterLoadingFinished())
                    dispatch(onAddEmailToNewsletterSucceeded(response));
                } else {
                    dispatch(onNewsletterLoadingFinished())
                    dispatch(onSubscribeStockoutSucceeded(response));
                }
            } else {
                if (tag === "footer") {
                    dispatch(onSubscribeStockoutLoadingFinished())
                    dispatch(onAddEmailToNewsletterFailed(response));
                } else {
                    dispatch(onSubscribeStockoutLoadingFinished())
                    dispatch(onSubscribeStockoutFailed(response));
                }
            };
        } catch (error: any) {
            dispatch(onAddEmailToNewsletterFailed(error));
        }
    };
};

export const onAddEmailToNewsletterFailed = (error: any) => ({
    type: ON_ADD_EMAIL_TO_NEWSLETTER_FAILED,
    error
})

const onAddEmailToNewsletterSucceeded = (newsletter: any) => ({
    type: ON_ADD_EMAIL_TO_NEWSLETTER_SUCCEEDED,
    newsletter
})

const onSubscribeStockoutSucceeded = (subscribe: any) => ({
    type: ON_SUBSCRIBE_STOCKOUT_SUCCEEDED,
    subscribe
})

export const onSubscribeStockoutFailed = (error: any) => ({
    type: ON_SUBSCRIBE_STOCKOUT_FAILED,
    error
})

export const onCleanErrorsNewsletter = () => ({
    type: ON_CLEAN_ERRORS_NEWSLETTER,
})

export const onCleanErrorsStockout = () => ({
    type: ON_CLEAN_ERRORS_STOCKOUT,
})
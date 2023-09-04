import { AnyAction } from '@reduxjs/toolkit';
import {
    ON_GET_CART_LOADING_START,
    ON_GET_CART_LOADING_FINISHED,
    ON_ADD_TO_CART_LOADING_START,
    ON_ADD_TO_CART_LOADING_FINISHED,
    ON_UPDATE_TO_CART_LOADING_START,
    ON_UPDATE_TO_CART_LOADING_FINISHED,
    ON_DELETE_TO_CART_LOADING_START,
    ON_DELETE_TO_CART_LOADING_FINISHED,
    ON_ADD_COUPON_LOADING_START,
    ON_ADD_COUPON_LOADING_FINISHED,
    ON_DELETE_COUPON_LOADING_START,
    ON_DELETE_COUPON_LOADING_FINISHED,
    ON_CALC_SHIPPING_COST_LOADING_START,
    ON_CALC_SHIPPING_COST_LOADING_FINISHED,
    ON_EMPTY_CART_LOADING_START,
    ON_EMPTY_CART_LOADING_FINISHED,
    ON_START_BUY_LOADING_START,
    ON_START_BUY_LOADING_FINISHED,
    ON_GET_ORDER_LOADING_START,
    ON_GET_ORDER_LOADING_FINISHED,
    ON_SUBSCRIBE_STOCKOUT_LOADING_START,
    ON_NEWSLETTER_LOADING_START,
    ON_NEWSLETTER_LOADING_FINISHED
} from './loadingConstants';

import { ILoadingState } from "./types";

const initialState: ILoadingState = {
}

export default (state = initialState, action: AnyAction) => {
    switch (action.type) {

        case ON_GET_CART_LOADING_START:
            return {
                ...state,
                loadingGetCart: true
            };

        case ON_ADD_TO_CART_LOADING_START:
            return {
                ...state,
                loadingAddToCart: true
            };

        case ON_UPDATE_TO_CART_LOADING_START:
            return {
                ...state,
                loadingUpdateToCart: true
            };

        case ON_DELETE_TO_CART_LOADING_START:
            return {
                ...state,
                loadingDeleteToCart: true
            };

        case ON_ADD_COUPON_LOADING_START:
            return {
                ...state,
                loadingAddCoupon: true
            };

        case ON_DELETE_COUPON_LOADING_START:
            return {
                ...state,
                loadingDeleteCoupon: true
            };

        case ON_CALC_SHIPPING_COST_LOADING_START:
            return {
                ...state,
                loadingCalcShippingCost: true
            };

        case ON_EMPTY_CART_LOADING_START:
            return {
                ...state,
                loadingEmptyCart: true
            };

        case ON_START_BUY_LOADING_START:
            return {
                ...state,
                loadingStartBuy: true
            };

        case ON_GET_ORDER_LOADING_START:
            return {
                ...state,
                loadingGetOrder: true
            };


        case ON_SUBSCRIBE_STOCKOUT_LOADING_START:
            return {
                ...state,
                loadingSubscribeStockout: true
            };

        case ON_NEWSLETTER_LOADING_START:
            return {
                ...state,
                loadingNewsletter: true
            };

        case ON_GET_CART_LOADING_FINISHED:
            return {
                ...state,
                loadingGetCart: false
            };

        case ON_ADD_TO_CART_LOADING_FINISHED:
            return {
                ...state,
                loadingAddToCart: false
            };

        case ON_UPDATE_TO_CART_LOADING_FINISHED:
            return {
                ...state,
                loadingUpdateToCart: false
            };

        case ON_DELETE_TO_CART_LOADING_FINISHED:
            return {
                ...state,
                loadingDeleteToCart: false
            };

        case ON_ADD_COUPON_LOADING_FINISHED:
            return {
                ...state,
                loadingAddCoupon: false
            };

        case ON_DELETE_COUPON_LOADING_FINISHED:
            return {
                ...state,
                loadingDeleteCoupon: false
            };

        case ON_CALC_SHIPPING_COST_LOADING_FINISHED:
            return {
                ...state,
                loadingCalcShippingCost: false
            };

        case ON_EMPTY_CART_LOADING_FINISHED:
            return {
                ...state,
                loadingEmptyCart: false
            };

        case ON_START_BUY_LOADING_FINISHED:
            return {
                ...state,
                loadingStartBuy: false
            };

        case ON_GET_ORDER_LOADING_FINISHED:
            return {
                ...state,
                loadingGetOrder: false
            };

        case ON_GET_ORDER_LOADING_FINISHED:
            return {
                ...state,
                loadingSubscribeStockout: false
            };

        case ON_NEWSLETTER_LOADING_FINISHED:
            return {
                ...state,
                loadingNewsletter: false
            };

        default:
            return state;
    }
}

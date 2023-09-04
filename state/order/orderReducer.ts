import { AnyAction } from '@reduxjs/toolkit';
import { IOrderState } from './types';
import { ON_GET_CART_FAILED, ON_GET_CART_SUCCEEDED } from '../cart/cartConstants';

const initialState: IOrderState = {
}

export default (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ON_GET_CART_SUCCEEDED:
            return {
                ...state,
                orderData: action.orderData
            }
        case ON_GET_CART_FAILED:
            return {
                ...state,
                error: false
            }
        default:
            return state;
    }
}

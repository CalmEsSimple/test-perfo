import { AnyAction } from '@reduxjs/toolkit';
import {
  ON_GET_CART_FAILED,
  ON_GET_CART_SUCCEEDED,
  ON_ADD_ITEM_TO_CART_FAILED,
  ON_ADD_ITEM_TO_CART_SUCCEEDED,
  ON_REMOVE_ITEM_FROM_CART_FAILED,
  ON_REMOVE_ITEM_FROM_CART_SUCCEEDED,
  ON_UPDATE_ITEM_FROM_CART_SUCCEEDED,
  ON_UPDATE_ITEM_FROM_CART_FAILED,
  ON_CLEAR_CART_SUCCEEDED,
  ON_ADD_COUPON_TO_CART_SUCCEEDED,
  ON_REMOVE_COUPON_TO_CART_SUCCEEDED,
  ON_UPDATE_SHIPPING_FROM_CART_SUCCEEDED,
  ON_CLEAR_CART_FAILED,
  ON_ADD_COUPON_TO_CART_FAILED,
  ON_REMOVE_COUPON_TO_CART_FAILED,
  ON_UPDATE_SHIPPING_FROM_CART_FAILED,
  ON_GET_CART_RELATED_PRODUCTS_FAILED,
  ON_GET_CART_RELATED_PRODUCTS_SUCCEEDED,
  ON_OPEN_SIDECART,
  ON_CLOSE_SIDECART,
  ON_GET_VARIATION_SUCCEEDED,
  ON_GET_VARIATION_FAILED
} from './cartConstants';
import { ICartState } from './types';

const initialState: ICartState = {
  error: false,
  openSideCart: false
}

export default (state = initialState, action: AnyAction) => {

  switch (action.type) {
    case ON_GET_CART_SUCCEEDED:
    case ON_REMOVE_ITEM_FROM_CART_SUCCEEDED:
    case ON_UPDATE_ITEM_FROM_CART_SUCCEEDED:
    case ON_CLEAR_CART_SUCCEEDED:
    case ON_ADD_COUPON_TO_CART_SUCCEEDED:
    case ON_REMOVE_COUPON_TO_CART_SUCCEEDED:
    case ON_UPDATE_SHIPPING_FROM_CART_SUCCEEDED:
      return {
        ...state,
        cartData: action.cartData.dataCart.data,
        descriptionCoupons: action.cartData.descriptionCoupons
      };

    case ON_ADD_ITEM_TO_CART_SUCCEEDED:
      return {
        ...state,
        cartData: action.cartData.dataCart.data,
        descriptionCoupons: action.cartData.descriptionCoupons,
        openSideCart: true
      };

    case ON_GET_VARIATION_SUCCEEDED:
      return {
        ...state,
        variationsData: state.variationsData ? state.variationsData.concat(action.variationData) : [action.variationData]
      }

    case ON_GET_CART_RELATED_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        currentProductsRelated: action.productData
      };

    case ON_GET_CART_FAILED:
    case ON_GET_VARIATION_FAILED:
    case ON_ADD_ITEM_TO_CART_FAILED:
    case ON_REMOVE_ITEM_FROM_CART_FAILED:
    case ON_UPDATE_ITEM_FROM_CART_FAILED:
    case ON_CLEAR_CART_FAILED:
    case ON_ADD_COUPON_TO_CART_FAILED:
      return {
        ...state,
        error: true,
        errorDetail: action.errorDetail
      };
    case ON_REMOVE_COUPON_TO_CART_FAILED:
    case ON_UPDATE_SHIPPING_FROM_CART_FAILED:
    case ON_GET_CART_RELATED_PRODUCTS_FAILED:
      return {
        ...state,
        error: true,
      };
    case ON_OPEN_SIDECART:
      return {
        ...state,
        openSideCart: true
      };
    case ON_CLOSE_SIDECART:
      return {
        ...state,
        openSideCart: false
      };
    default:
      return state;
  }
};
import { AnyAction } from '@reduxjs/toolkit';
import {
  ON_GET_HOME_RELATED_PRODUCTS_FAILED,
  ON_GET_HOME_RELATED_PRODUCTS_SUCCEEDED,
  ON_GET_NEW_RELATED_PRODUCTS_FAILED,
  ON_GET_NEW_RELATED_PRODUCTS_SUCCEEDED,
  ON_GET_PRODUCT_FAILED,
  ON_GET_PRODUCT_SUCCEEDED,
  ON_GET_RELATED_PRODUCTS_FAILED,
  ON_GET_RELATED_PRODUCTS_SUCCEEDED,
  ON_GET_DEFAULT_PRODUCTS_FAILED,
  ON_GET_DEFAULT_PRODUCTS_SUCCEEDED,
  ON_GET_SHIPPING_TIME_SUCCEEDED,
  ON_GET_SHIPPING_TIME_FAILED,
} from './productsConstants';
import { IProductState } from './types';

const initialState: IProductState = {
  error: false,
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ON_GET_PRODUCT_SUCCEEDED:
      return {
        ...state,
        productsData: state.productsData ? state.productsData.concat(action.productData) : [action.productData]
      };

    case ON_GET_HOME_RELATED_PRODUCTS_SUCCEEDED:
    case ON_GET_RELATED_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        currentProductsRelated: action.productData
      };
    case ON_GET_NEW_RELATED_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        newProductsRelated: action.productData
      };
    case ON_GET_DEFAULT_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        defaultProducts: action.defaultProducts
      }
    case ON_GET_SHIPPING_TIME_SUCCEEDED:
      return {
        ...state,
        shippingTime: action.shippingTime
      }
    case ON_GET_PRODUCT_FAILED:
    case ON_GET_HOME_RELATED_PRODUCTS_FAILED:
    case ON_GET_RELATED_PRODUCTS_FAILED:
    case ON_GET_NEW_RELATED_PRODUCTS_FAILED:
    case ON_GET_DEFAULT_PRODUCTS_FAILED:
    case   ON_GET_SHIPPING_TIME_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};
import {
  ON_GET_HOME_RELATED_PRODUCTS_FAILED,
  ON_GET_HOME_RELATED_PRODUCTS_SUCCEEDED,
  ON_GET_NEW_RELATED_PRODUCTS_FAILED,
  ON_GET_NEW_RELATED_PRODUCTS_SUCCEEDED,
  ON_GET_PRODUCT_FAILED,
  ON_GET_PRODUCT_SUCCEEDED,
  ON_GET_RELATED_PRODUCTS_FAILED,
  ON_GET_RELATED_PRODUCTS_SUCCEEDED,
  ON_GET_DEFAULT_PRODUCTS_SUCCEEDED,
  ON_GET_DEFAULT_PRODUCTS_FAILED,
  ON_GET_SHIPPING_TIME_SUCCEEDED,
  ON_GET_SHIPPING_TIME_FAILED
} from './productsConstants';

import { getDefaultProduct, getHomeRelatedProducts, getNewRelatedProducts, getProduct, getRelatedProducts, getShippingTime } from './productsServices';

export const onGetProduct = (id: string) => {
  return async (dispatch: any) => {
    const response = await getProduct(id);
    if (response) {
      dispatch(onGetProductSucceeded(response));
    } else {
      dispatch(onGetProductFailed());
    }
  };
};

const onGetProductSucceeded = (productData: any) => ({
  type: ON_GET_PRODUCT_SUCCEEDED,
  productData
});

const onGetProductFailed = () => ({
  type: ON_GET_PRODUCT_FAILED
});

export const onGetHomeRelatedProducts = () => {
  return async (dispatch: any) => {
    const response = await getHomeRelatedProducts();
    if (response) {
      dispatch(onGetHomeRelatedProductsSucceeded(response));
    } else {
      dispatch(onGetHomeRelatedProductsFailed());
    }
  };
};

const onGetHomeRelatedProductsSucceeded = (productData: any) => ({
  type: ON_GET_HOME_RELATED_PRODUCTS_SUCCEEDED,
  productData
});

const onGetHomeRelatedProductsFailed = () => ({
  type: ON_GET_HOME_RELATED_PRODUCTS_FAILED
});

export const onGetNewRelatedProducts = () => {
  return async (dispatch: any) => {
    const response = await getNewRelatedProducts();
    if (response) {
      dispatch(onGetNewRelatedProductsSucceeded(response));
    } else {
      dispatch(onGetNewRelatedProductsFailed());
    }
  };
};

const onGetNewRelatedProductsSucceeded = (productData: any) => ({
  type: ON_GET_NEW_RELATED_PRODUCTS_SUCCEEDED,
  productData
});

const onGetNewRelatedProductsFailed = () => ({
  type: ON_GET_NEW_RELATED_PRODUCTS_FAILED
});

export const onGetRelatedProducts = (id: string) => {
  return async (dispatch: any) => {
    const response = await getRelatedProducts(id);
    if (response) {
      dispatch(onGetRelatedProductsSucceeded(response));
    } else {
      dispatch(onGetRelatedProductsFailed());
    }
  };
};

const onGetDefaulProductsSucceeded = (defaultProducts: any) => ({
  type: ON_GET_DEFAULT_PRODUCTS_SUCCEEDED,
  defaultProducts
});

const onGetDefaulProductsFailed = () => ({
  type: ON_GET_DEFAULT_PRODUCTS_FAILED
});

export const onGetSDefaultProducts = () => {
  return async (dispatch: any) => {
    const response = await getDefaultProduct();
    if (response) {
      dispatch(onGetDefaulProductsSucceeded(response));
    } else {
      dispatch(onGetDefaulProductsFailed());
    }
  };
};

const onGetRelatedProductsSucceeded = (productData: any) => ({
  type: ON_GET_RELATED_PRODUCTS_SUCCEEDED,
  productData
});

const onGetRelatedProductsFailed = () => ({
  type: ON_GET_RELATED_PRODUCTS_FAILED
});


export const onGetShippingTime = (cp: string, id: string) => {
  return async (dispatch: any) => {
    const response = await getShippingTime(cp, id);

    if (response) {
      dispatch(onGetShippingTimeSucceeded(response));
    } else {
      dispatch(onGetShippingTimeFailed());
    }
  };
};

const onGetShippingTimeSucceeded = (shippingTime: any) => ({
  type: ON_GET_SHIPPING_TIME_SUCCEEDED,
  shippingTime
});

const onGetShippingTimeFailed = () => ({
  type: ON_GET_SHIPPING_TIME_FAILED
});
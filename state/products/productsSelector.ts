import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../types";

export const getCurrentProductsRelated = createSelector((state: IStore) => state.products.currentProductsRelated, currentProductsRelated => currentProductsRelated);

export const getProductsData = createSelector((state: IStore) => state.products.productsData, productsData => productsData);

export const getDefaultProducts = createSelector((state: IStore) => state.products.defaultProducts, defaultProducts => defaultProducts);

export const getShippintTime = createSelector((state: IStore) => state.products.shippingTime, shippingTime => shippingTime);
import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../types";

export const getOpenSideCart = createSelector((state: IStore) => state.cart.openSideCart, openSideCart => openSideCart);

export const getCartItemsCount = createSelector((state: IStore) => state.cart.cartData, cartData => cartData ? cartData.items_count : "");

export const getShippingCost = createSelector((state: IStore) => state.cart.cartData?.totals?.total_shipping, shippingCost => shippingCost);

export const getCartError = createSelector((state: IStore) => state.cart, cart => {return {error: cart.error, errorDetail: cart.errorDetail}});

export const getTotalPrice = createSelector((state: IStore) => state.cart.cartData?.totals?.total_price, total_price => total_price ?? "0");

export const getSubtotalPrice = createSelector((state: IStore) => state.cart.cartData?.totals?.total_items, total_items => total_items ?? "0");

export const getSubtotalPriceDiscount = createSelector((state: IStore) => state.cart.cartData?.totals?.total_discount, total_discount => total_discount ?? "0");

export const getCartData = createSelector((state: IStore) => state.cart.cartData, cartData => cartData);

export const getVariationsData = createSelector((state: IStore) => state.cart.variationsData, variationsData => variationsData);

export const getCartCurrentProductsRelated = createSelector((state: IStore) => state.cart.currentProductsRelated, currentProductsRelated => currentProductsRelated);

export const getDescriptionCoupons = createSelector((state: IStore) => state.cart.descriptionCoupons, descriptionCoupons => descriptionCoupons);

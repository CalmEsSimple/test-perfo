import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../types";

export const getLoadingAddToCart = createSelector((state: IStore) => state.loading.loadingAddToCart, loadingAddToCart => loadingAddToCart);

export const getLoadingAddOrUpdateCart = createSelector((state: IStore) => state.loading, loading => loading.loadingAddToCart || loading.loadingUpdateToCart);

export const getLoadingSubscribeStockout = createSelector((state: IStore) => state.loading.loadingSubscribeStockout, loadingSubscribeStockout => loadingSubscribeStockout)

export const getLoadingNewsletter = createSelector((state: IStore) => state.loading.loadingNewsletter, loadingNewsletter => loadingNewsletter)

export const getLoadingValues = createSelector((state: IStore) => state.loading, loading => loading);
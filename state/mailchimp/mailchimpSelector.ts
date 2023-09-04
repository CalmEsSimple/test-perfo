import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../types";

export const getNewsLetterResponse = createSelector((state: IStore) => state.mailchimp, mailchimp => mailchimp.newsletter)

export const getSubscribeStockoutResponse = createSelector((state: IStore) => state.mailchimp, mailchimp => mailchimp.subscribeStockOut)
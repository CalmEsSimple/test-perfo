import { ICartState } from "./cart/types";
import { ILoadingState } from "./loading/types";
import { IMailchimp } from "./mailchimp/types";
import { IProductState } from "./products/types";

export interface IStore {
    products: IProductState;
    cart: ICartState;
    loading: ILoadingState;
    mailchimp: IMailchimp;

}

export interface IAPIResponse {
    dataCart: {
        status: number,
        data: {
            [key: string]: string | object;
        }
    },
    descriptionCoupons: {
        [key: string]: string;
    }[]
}
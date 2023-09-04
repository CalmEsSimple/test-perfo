import { IProduct } from "./state/products/types";

export interface ILanding {
    landingSEO: ILandingSEO
    graphImageObject?: {[key: string]: string | number | object}
    graphWebPage?: {[key: string]: string | number | object}
    faqAccordion?: {nro: number; title: string; answer?: string}[]
}

export interface ICategoryLanding extends ILanding {
    products: IProduct[]
}  

export interface ILandingSEO {
    title: string;
    description: string;
    image: string;
    url: string;
}

export interface IBannerSidecart {
    colorBackground: string;
    colorText: string;
    textBanner: string;
}

export interface IHeaderBanner {
    text: string;
    backgroundColor: {
        hex: string;
    }
    textColor: {
        hex: string;
    }
}

export interface IPlainImageSlide {
    alt: string;
    redirection: string;
    color: string;
    src: string;
    mobile_src: string;
    position: number;
}

export interface IPlainImagesSliderBanner {
    imagesData: IPlainImageSlide[];
}
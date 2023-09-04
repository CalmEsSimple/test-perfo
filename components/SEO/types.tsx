export interface IProps {
    title: string;
    description: string;
    imageSrc?: string;
    url: string;
    graphImageObject?: {[key: string]: string | number | object}
    graphWebPage?: {[key: string]: string | number | object}
    faqAccordion?: {nro: number; title: string; answer?: string}[];
    showCalmRichSnippet?: boolean
    productReviewsSKUs?: string
}
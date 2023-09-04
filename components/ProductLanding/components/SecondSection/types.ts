export interface IProps {
    skus?: string;
    isSquare?: boolean;
    layoutImages?: string[];
    layoutImagesHaveVideo?: boolean;
    accordionSpecsTexts?: {nro: number, title: string, answer: string}[]
    specsTexts?: {title: string, subtitle: string, mobileImg?: string}[]
    hasProgressBar?: boolean
}
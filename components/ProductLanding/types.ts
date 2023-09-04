import { ILandingSEO } from "@/types"

export interface IProps {
    productId: string
    comboIds?: string[]
    title: string
    boldTitle: string
    selectedLink: string
    landingSEO: ILandingSEO
    graphImageObject?: {[key: string]: string | number | object}
    graphWebPage?: {[key: string]: string | number | object}
    dreamDelivery?: boolean
    skus?: string
    skusFeria?: string
    isSquare?: boolean
    layoutImages?: string[]
    layoutImagesHaveVideo?: boolean
    accordionSpecsTexts?: {nro: number, title: string, answer: string}[]
    specsTitle?: string
    specsBoldTitle?: string
    radiographyTitle?: string
    radiographyBoldTitle?: string
    specsTexts?: {title: string, subtitle: string, mobileImg?: string}[]
    hasProgressBar?: boolean
    specsImage?: string
    specsValues?: {name: string, size: string, description?: string}[]
    radiographyImage?: string
    radiographyTexts?: {title: string, subtitle?: string}[]
    hasTutorialSection?: {show: boolean, title: string, boldTitle: string, videoId: string,}
    blogPosts?: {
        firstImage: string
        secondImage: string
        firstTitle: string
        secondTitle: string
        firstText: string
        secondText: string
        firstButtonText: string
        secondButtonText: string
        firstButtonLink: string
        secondButtonLink: string
    }
    hasUnboxingSection?: boolean
    faqAccordionTitle?: string
    faqAccordionBoldTitle?: string
    faqAccordion?: {nro: number, title: string, answer: string}[]
    specsAccordionTitle?: string
    specsAccordionBoldTitle?: string
    specsAccordion?: {nro: number, title: string, answer: string}[]
    reviewsTitle?: { title: string, bold: string}
}
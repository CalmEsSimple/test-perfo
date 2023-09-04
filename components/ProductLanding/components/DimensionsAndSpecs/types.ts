export interface IProps {
    specsTitle?: string
    specsBoldTitle?: string
    radiographyTitle?: string
    radiographyBoldTitle?: string
    imageUrl?: string;
    specs?: {
        name: string,
        size: string,
        description?: string
    }[];
    radiographyImage?: string
    radiographyTexts?: {title: string, subtitle?: string}[]
}
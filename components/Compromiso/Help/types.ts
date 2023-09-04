import { IStyledComponent } from "styled-components"
interface IImage {
 url: string,
 alt: string
}

interface ICard {
    img: IImage;
    step: string;
    text: string;
}

export interface IProps {
    cards: ICard[]; 
    Title?: IStyledComponent<"web", any>,
    Text?: IStyledComponent<"web", any>,
    background? : string
    carousel?: boolean
}


  
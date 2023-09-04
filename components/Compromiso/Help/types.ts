
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
    isCompromiso?: boolean
}

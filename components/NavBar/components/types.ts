import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IProps {
    menuData: {
        name: string;
        redirect: string;
        header: string;
        items: {
            name: string;
            pillMessage?: string;
            redirect: string;
            isYellowPill?: boolean;
            id: string;
        }[];
        seeMoreText: string;
        selectedProducts: {
            image_url: string;
            name: string;
            description?: string;
            redirect: string;
            id: string;
        }[];
    }[];
    staticLandings: {
        name: string;
        redirect: string;
    }[];
    cartItemsCount: ReactNode | number;
    selectedLink?: string;
    openCart: () => void;
    isMenuOpen?: boolean;
    setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
}
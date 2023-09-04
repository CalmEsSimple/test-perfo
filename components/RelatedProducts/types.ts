import { IProduct } from "@/state/products/types";

export interface IProps {
    relatedItems?: IProduct[];
    title: string;
    boldTitle: string;
    isYellowTitle?: boolean;
    isMobile?: boolean;
    fromCart?: boolean;
    fromProduct?: boolean
}
import { IChildrenProd } from "@/state/products/types"

export interface IProps {
    title: string
    boldTitle: string
    category: string
    dreamDelivery?: boolean
    description?: string
    galleryImages?: string[]
    children: IChildrenProd[] | undefined
    discount: number | undefined
    installments: number | undefined
    skus?: string,
    stateLoading?: boolean
    defaultProds: string[] | undefined
    pillId?: string
    pillIdPrice?: string
    isCombo?: boolean
    idProd: string | undefined
}
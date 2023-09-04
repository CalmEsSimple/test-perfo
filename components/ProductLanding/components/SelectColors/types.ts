import { IChildrenProd } from "@/state/products/types"

export interface IProps {
    arrChildren?: IChildrenProd[],
    arrOptions: string[]
    selectedChild?: IChildrenProd
    selectedProp: string
    setSelectedProp: any
    valToSearch: string
    sizeName: string

} 
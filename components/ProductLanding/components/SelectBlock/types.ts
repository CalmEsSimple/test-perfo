import { IChildrenProd } from "@/state/products/types"
import { Dispatch, SetStateAction } from 'react';

export interface IProps {
    arrChildren?: IChildrenProd[],
    arrOptions: string[]
    selectedChild?: IChildrenProd
    selectedProp: string
    setSelectedProp: any
    valToSearch: string
    sizeName: string
    setClearInput: Dispatch<SetStateAction<boolean>>
}
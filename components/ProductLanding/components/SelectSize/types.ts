import { IChildrenProd } from "@/state/products/types"
import { Dispatch, SetStateAction } from 'react';

export interface IProps {
    arrChildren?: IChildrenProd[],
    selected?: IChildrenProd
    setSelected: (id: string) => void
    valToSearch: string
    setClearInput: Dispatch<SetStateAction<boolean>>
}
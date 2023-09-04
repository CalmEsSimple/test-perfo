import { IStyledComponent } from "styled-components"

export interface IProps {
    items?: IAccordionItem[]
    DivContainerAccordion: IStyledComponent<"web", any>
    DivTitleAccordion: IStyledComponent<"web", any>
    DivTextAccordion: IStyledComponent<"web", any>
    TittleAccordion: IStyledComponent<"web", any>
    DescriptionAccordion: IStyledComponent<"web", any>
    IconIsActive: {
        LocalmQuestions: boolean
        LocalmEmpathy: boolean,
        frequentQuestions: boolean
    }
    isFAQPage?: boolean
    firstBoxIsActive?: boolean
    is30night?:boolean
}

export interface IAccordionItem {
    title: string
    answer: string
    is30night?:boolean
}

export interface IUnitProps {
    onClick: () => void
    itemName: string
    itemContent: string
    isActive?: boolean
    DivContainerAccordion: IStyledComponent<"web", any>
    DivTitleAccordion: IStyledComponent<"web", any>
    DivTextAccordion: IStyledComponent<"web", any>
    TittleAccordion: IStyledComponent<"web", any>
    DescriptionAccordion: IStyledComponent<"web", any>
    IconIsActive: {
        LocalmQuestions: boolean
        LocalmEmpathy: boolean,
        frequentQuestions: boolean
    }
    isLastUnit?: boolean
    isFAQPage?: boolean
    is30night?:boolean
}
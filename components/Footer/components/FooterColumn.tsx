import {
    StyledContainerColumn,
    CategoryFooterLink,
    ProductFooterLink
} from "./styled";

import { FooterTitle } from "./styled";
import { IProps } from "./types";

const FooterColumn = ({ items, title }: IProps) => {
    return (
        <>
            <StyledContainerColumn $hasTitle={title}>
                <FooterTitle>{title}</FooterTitle>
                {items.map(({ header, links, headerHref }, index) => {
                    return (
                        <div key={index}>
                            <CategoryFooterLink href={headerHref}> {header}</CategoryFooterLink>
                            {links.map(({ text, href }: {text: string, href: string}, index: number) => {
                                return (
                                    <div key={index}><ProductFooterLink href={href} key={text}>{text}</ProductFooterLink><br /></div>
                                )
                            })}
                        </div>
                    )
                })}
            </StyledContainerColumn>
        </>
    )
}

export default FooterColumn;
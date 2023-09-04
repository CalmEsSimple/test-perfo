import styled from "styled-components";

export const StyledContainerColumn = styled.div<{$hasTitle?:string}>`
    display: flex;
    justify-content:start;
    flex-direction: column;
    margin-bottom:auto;
    width:20ch;
    margin-top: 30px;
    margin-bottom: 0px;
    height:300px;
    
    
    ${props=> !props.$hasTitle && 'padding-top: 30px;'}

    @media ${props => props.theme.devices.mobile} {
        height:100%;
        width:50%;
        margin-bottom:0px;
        margin-top:15px;
        margin-left:20px;
        .footerColumn {
            display:flex;
            flex-direction:column;
        }
    }
`;

export const FooterTitle = styled.div`
    color: ${props => props.theme.colors.offBlack};
    font-size: 1.25rem;
    font-family:${props => props.theme.fonts.extraBold};
    margin-bottom: 15px;
`;

export const CategoryFooterLink = styled.a`
    color: ${props => props.theme.colors.millionGray};
    text-decoration:none;
    text-transform: lowercase;
    cursor:pointer;
    font-size: 0.8rem;
    font-family:${props => props.theme.fonts.extraBold};
`;

export const ProductFooterLink = styled.a`
    color: ${props => props.theme.colors.millionGray};
    font-size: 0.8rem;
    text-decoration: none;
    
`;



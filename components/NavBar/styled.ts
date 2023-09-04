import styled from "styled-components";

export const NavBarWrapper = styled.div`
    position: sticky;
    top: -1px;
    z-index: 19;
`;

export const MenuWrapper = styled.div`
    background-color:  ${props => props.theme.colors.white};
    z-index: 1;
`;
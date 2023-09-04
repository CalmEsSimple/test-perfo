import styled from "styled-components";

export const StyledContainer = styled.footer`
    display: flex;
    position:relative;
    height:100%;
    padding: 0 70px;
    background-color: ${props => props.theme.colors.coldMorning};
    justify-content:space-evenly;
    bottom: -1.5em;
    @media ${props => props.theme.devices.mobile} {
        flex-direction:column;
        .twoColumns{
            display:flex;
            flex-direction:row;
            width:100%;
        }
        padding: 20px;
    }
`;
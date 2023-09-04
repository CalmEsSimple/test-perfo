import styled from "styled-components";

export const Content = styled.div`
    background-color: #f8f8f8;
    padding: 20px 0;
`;

export const Wrapper = styled.div`
    width: 80%;
    margin: auto;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    @media ${props => props.theme.devices.biggerMobile} {
        flex-direction: column;
        align-items: center;
    }
`;

export const ItemWrapper = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    @media ${props => props.theme.devices.biggerMobile} {
        width: 60%;
    }
`;

export const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: ${props => props.theme.colors.yellowCalm};
    margin-bottom: 10px;
`;

export const Title = styled.p`
    color: ${props => props.theme.colors.offBlack};
    font-size: 1.5em;
    font-family: ${props => props.theme.fonts.extraBold};
    text-align: center;
`;

export const Subtitle = styled(Title)`
    font-size: 1em;
    font-family: ${props => props.theme.fonts.regular};
    margin: 1em 0 .5em;
    b {
        font-family: ${props => props.theme.fonts.extraBold};
    }
    span {
        font-family: ${props => props.theme.fonts.extraBold};
        color: #8f4f9a;
    }
`;
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    @media ${props => props.theme.devices.biggerMobile} {
        width: 95%;
        flex-direction: column;
        align-items: center;
    }
`;

export const Column = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 0 10px;
    @media ${props => props.theme.devices.biggerMobile} {
        width: 100%;
    }
`;

export const Img = styled.img`
    width: 40%;
    padding-right: 10px;
`;

export const InnerColumn = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ColumnTitle = styled.h3`
    font-size: 1.2em;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.offBlack};
    font-family: ${props => props.theme.fonts.extraBold};
`;

export const Title = styled.p`
    font-size: 1.1em;
    color: ${props => props.theme.colors.millionGray};
    font-family: ${props => props.theme.fonts.bold};
    padding: 10px 10px 10px 0;
`;

export const Subtitle = styled(Title)`
    font-family: ${props => props.theme.fonts.regular};
    font-size: .75em;
    line-height: 1.2em;
`;
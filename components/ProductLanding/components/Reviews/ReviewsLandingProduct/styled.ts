import styled from "styled-components";

export const ReviewsContainer = styled.div`
    margin-right: 10%;
    margin-left: 10%;
    padding: 2em;

    @media ${props => props.theme.devices.mobile} {
        margin-right: 1%;
        margin-left: 1%;
        padding: 1em;
    }
`;

export const ReviewsTitle = styled.p`
    text-align: left;
    margin: 10px 0;
    font-size: 2em;
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.yellowCalm};

    @media ${props => props.theme.devices.mobile} {
        text-align: center;
        font-size: 1.4em;
    }
`;

export const ReviewsSubtitle = styled.p`
    text-align: left;
    margin: 10px 0;
    font-size: 1.2em;
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.yellowCalm};

    @media ${props => props.theme.devices.mobile} {
        text-align: center;
    }
`;

export const Bold = styled.span`
    font-family: ${props => props.theme.fonts.extraBold};
`
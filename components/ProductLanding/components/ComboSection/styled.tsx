import styled from "styled-components";

export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    @media ${props => props.theme.devices.mobile} {
        margin: 10px 0;
    }
`;

export const Container = styled.div<{ $isOkOrder?: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media ${props => props.theme.devices.mobile} {
        flex-direction: ${props => props.$isOkOrder ? "column" : "column-reverse"};
    }
`;

export const ImageWrapper = styled.div`
    width: 50%;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
    }
`;

export const Img = styled.img`
    width: 100%;
    border-radius: 10px;
`;

export const SpecsWrapper = styled.div`
    width: 50%;
    padding: 0 5% 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
        margin: 30px 0;
        padding: 0 5%;
        align-items: center;
    }
`;

export const SpecName = styled.span`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 1em;
    color: ${props => props.theme.colors.offBlack};
    font-weight: 400;
`;

export const SectionBoldTitle = styled.span`
    font-size: 1.6em;
    color: ${props => props.theme.colors.yellowCalm};
    font-family: ${props => props.theme.fonts.extraBold};
    margin-bottom: 1em;
`;
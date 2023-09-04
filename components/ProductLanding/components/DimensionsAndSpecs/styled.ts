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

export const Title = styled.p`
    color: ${props => props.theme.colors.offBlack};
    font-size: 1.7em;
    margin-bottom: 20px;
    @media ${props => props.theme.devices.mobile} {
        width: 90%;
        margin: 1rem auto;
        text-align: center;
      }
`;

export const BoldTitle = styled.b`
    font-family: ${props => props.theme.fonts.extraBold};
`;

export const Container = styled.div<{ $isRadiography?: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media ${props => props.theme.devices.mobile} {
        flex-direction: ${props => props.$isRadiography ? "column" : "column-reverse"};
    }
`;

export const SpecsWrapper = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
    }
`;

export const TableWrapper = styled.div`
    width: 70%;
    margin: auto;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
    }
`;

export const Row = styled.div<{$isSize?: boolean, $isOnlyTitle?: boolean}>`
    display: flex;
    justify-content: space-between;
    position: relative;
    ${props => !props.$isOnlyTitle && `border-bottom: solid 1px ${props.theme.colors.millionGray};`}
    padding: ${props => props.$isSize ? "1em" : "1em 0"};
    ${props => !props.$isSize && "flex-direction: column;"}
`;

export const SpecName = styled.span`
    font-family: ${props => props.theme.fonts.extraBold};
    color: ${props => props.theme.colors.millionGray};
    font-size: 1em;
    font-weight: 600;
`;

export const SpecSize = styled(SpecName)`
    font-family: ${props => props.theme.fonts.regular};
    font-weight: 400;
`;

export const SpecDescription = styled.p`
    position: absolute;
    right: 5%;
    bottom: 1%;
    color: ${props => props.theme.colors.millionGray};
    font-family: ${props => props.theme.fonts.regular};
    font-size: 0.7em;

`

export const ImageWrapper = styled.div`
    width: 55%;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
    }
`;

export const Img = styled.img`
    width: 100%;
    border-radius: 10px;
`;

export const RadiographyWrapper = styled(SpecsWrapper) <{ $isRadiography?: boolean }>`
    width: 50%;
    ${props => !props.$isRadiography && "padding: 0 5% 0 10%;align-items: flex-start;"}
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
        margin: 30px 0;
        ${props => !props.$isRadiography && "padding: 0 5%;align-items: center;"}
    }
`;

export const RadiographyImageWrapper = styled(ImageWrapper)`
    width: 50%;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
    }
`;

export const RadiographyTitle = styled(SpecName)<{$isRadiography?: boolean, $isOnlyTitle?: boolean}>`
    font-size: ${props => props.$isRadiography ? "1.2em" : "1.3em"};
    ${props => props.$isOnlyTitle && "font-size: 1.4em;"}
`;

export const RadiographyText = styled(SpecName)`
    font-family: ${props => props.theme.fonts.light};
    font-size: 0.8em;
    letter-spacing: -0.2px;
`;

export const RadiographySubtitle = styled(SpecSize) <{ $isRadiography?: boolean }>`
    font-size: 0.9em;
    color: ${props => props.theme.colors.offBlack};
    padding: 1em 0;
    @media ${props => props.theme.devices.mobile} {
        ${props => !props.$isRadiography && "text-align: center;"}
        font-size: 1.1em;
    }
`;

export const SectionTitle = styled.span`
    font-size: 1.8em;
    color: ${props => props.theme.colors.offBlack};
`;

export const SectionBoldTitle = styled(SectionTitle)`
    font-family: ${props => props.theme.fonts.extraBold};
    margin-bottom: 1em;
`;
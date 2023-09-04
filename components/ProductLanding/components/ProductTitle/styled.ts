import styled from "styled-components";
import { Wrapper, Content } from "../../../../components/LoadingDiv/styled";

export const ComponentWrapper = styled.div`
    font-weight: 700;
    margin: 0 0 0.8rem 0;

    @media ${props => props.theme.devices.mobile} {
        margin: 0 0 0.5rem 0;
    }
        
    .title-cont {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const TitleWrapper = styled.div`
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media ${props => props.theme.devices.mobile} {
        gap: 0.1rem;
    }
`;

export const SpanTitle = styled.span`
    display: flex;
    flex-direction: column;
    gap: 0;
`

export const Title = styled.h3`
    font-weight: 200;
    font-size: 2.6rem;
    line-height: 40px;
    color: ${props => props.theme.colors.offBlack};
    margin: 0;

    @media ${props => props.theme.devices.mobile} {
        font-size: 2.1rem;
        line-height: 32px;
    }
`;

export const BoldTitle = styled(Title)`
    font-family: ${props => props.theme.fonts.extraBold};
`;

export const Description = styled.p`
    color: ${props => props.theme.colors.offBlack};
    font-size: 1em;
    line-height: 20px;

    strong {
        font-family: ${props => props.theme.fonts.extraBold};
    }
`;

export const ComboDescription = styled.p`
    color: ${props => props.theme.colors.thamarBlack};
    font-size: 1em;
    line-height: 20px
`;

export const BoldComboDescription = styled.span`
    font-family: ${props => props.theme.fonts.extraBold};
    color: ${props => props.theme.colors.thamarBlack};
    font-size: 1em;
    line-height: 20px
`;

export const LoadingWrapper = styled(Wrapper)`
    /* max-width: 350px; */
`;

export const LoadingTitleContent = styled(Content)`
    height: 80px;
`;

export const LoadingDescriptionContent = styled(Content)`
    height: 20px;
`;
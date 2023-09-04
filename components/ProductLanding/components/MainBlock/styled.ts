import styled from "styled-components";
import { Content as LoadingContent } from "../../../../components/LoadingDiv/styled";

export const Wrapper = styled.div`
    max-width: 1140px;
    width: 95%;
    display: flex;
    flex-direction: column;
    margin: 1.5rem auto 0 auto;
    gap: 1rem;

    @media ${props => props.theme.devices.mobile} {
        margin: auto;
        width: 100%;
        gap: 10px;
    }
`;

export const SpanColumns = styled.span`
    display: flex;
    gap: 0;
    @media ${props => props.theme.devices.mobile} {
        gap: 0.5rem;
        flex-direction: column;
        margin: auto;
        width: 95%;
    }
`;

export const MainContentWrapper = styled.section`
    margin: auto;
`;

export const TextSizes = styled.p`
    @media ${props => props.theme.devices.mobile} {
        margin: 1rem 0 0.5rem 0;
    }
`

export const Breadcrumbs = styled.div`
    grid-column: 1/3;
    grid-row: 1/2;
    color: #999;
    display: flex;
    gap: 6px;

    .category {
        text-decoration: none;
        color: #999;
        font-weight: 800;
        font-family: 'Gilroy-ExtraBold'
    }

    @media ${props => props.theme.devices.mobile} {
        /* margin-bottom: 0.5rem; */
        width: 95%;
        margin: 0 auto;
    }
`

export const LeftColumn = styled.div`
    width: 65%;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
    }
`;

export const LoadingGalleryContent = styled(LoadingContent)`
    height: 485px;
`;

export const LoadingThumbnailsContent = styled(LoadingContent)`
    height: 90px;
`;

export const GalleryWrapper = styled.div`
    width: 100%;
    max-width: 720px;
`;

export const RightColumn = styled.div`
    width: 35%;
    margin-left: 1rem;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
        margin-left: 0;
    }
`;

export const VariationText = styled.p`
    font-size: .9em;
    margin-bottom: 5px;
    font-family: ${props => props.theme.fonts.light};
`;

export const PriceDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    margin: 1rem 0;
    row-gap: 1rem;
`

export const PillCategoryDiscount = styled.p`
    color: white;
    background-color: #303030;
    white-space: nowrap;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.8px;
    grid-column: 1/3;
    grid-row: 2/3;
    border-radius: 50px;
    width: fit-content;
    padding: 0.2rem 0.5rem;
`
export const DivEnsueño = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 1rem 0 1rem 0;
`

export const DivPillDiscount = styled.div`
    display: flex;
    align-items: center;
`

export const DivPriceOff = styled.div`
    display: flex;
`

export const FeriaText = styled.p`
    color: ${props => props.theme.colors.millionGray};
    font-family: ${props => props.theme.fonts.medium};
    font-size: .9em;
`
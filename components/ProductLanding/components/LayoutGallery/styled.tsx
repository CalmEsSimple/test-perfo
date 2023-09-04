import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    @media ${props => props.theme.devices.mobile} {
        display: none;
    }
`;

export const RowWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: .5%;
`;

export const ColumnWrapper = styled.div<{$onlyChild?: boolean, $multipleRow?: boolean}>`
    width: ${props => props.$onlyChild ? "100%" : "49.5%"};
    display: flex;
    ${props => props.$multipleRow && "flex-direction: column;"}
    border-radius: 8px;
`;

export const LayoutImgWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    border-radius: 8px;
    transition: transform 1s ease;
`;

export const LayoutImg = styled.img`
    width: 100%;
    border-radius: 8px;
    transition: transform 1s ease;

    &:hover {
        transform: scale(1.05);
        transition: 1.5s;
    }
`;

export const LayoutVideo = styled.video`
    width: 100%;
    border-radius: 8px;
`;

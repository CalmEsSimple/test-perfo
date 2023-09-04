import styled from "styled-components";

export const DivHeader = styled.div<{$colorBg?: string}>`
        background-color: ${props => props.$colorBg ?? '#303030'};
        color: ${props => props.color ?? '#000'};
        text-align: center;
        padding: 5px 8px;
        font-size: 14px;
`
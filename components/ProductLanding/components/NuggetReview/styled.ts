import styled from "styled-components";

export const NuggetWrapper = styled.div`
    max-width: 420px;
    height: 120px;
    background-color: #f9f9f9;
    border-radius: .5rem;
    .u-textSentenceCase {
        font-family: ${props => props.theme.fonts.extraBold};
    }
`;
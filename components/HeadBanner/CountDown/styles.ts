import styled from 'styled-components';

export const Container = styled.span`
    margin: 0 3px;

    span {
        display: inline-flex;
        width: 20px;
        font-family: ${props => props.theme.fonts.extraBold};
    }
`
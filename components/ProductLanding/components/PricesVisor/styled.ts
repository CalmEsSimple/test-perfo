import styled from "styled-components";

export const ContainerPrices = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1/2;
    grid-row: 1/2;
`

export const RegularPrice = styled.p`
    font-size: 1rem;
    color: #40914D;
    text-decoration: line-through;
    font-weight: 600;
    font-size: 1.1rem;
`

export const DiscountPrice = styled.p`
    font-size: 2.6rem;
    font-family: 'Gilroy-Medium';
    color: #303031
`

export const MultipleFees = styled.p`
    color: #303031;
    font-weight: 500;
    font-size: 1.1rem;

    .green-text {
        color: #40914D;
    }

    span {
        font-size: 1rem;
    }

`
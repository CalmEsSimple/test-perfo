import styled from "styled-components";

export const Shipping = styled.section`
    margin: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, auto);
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 10px;

    .calc-span {
        grid-column: 1/2;
        grid-row: 1/2;
        display: flex;
        gap: 5px;
        justify-self: flex-start;
    }

    .calc-btn-trigger {
        grid-column: 2/3;
        grid-row: 1/2;
        border: none;
        background: none;
        cursor: pointer;
    }

    .final-price {
        grid-column: 2/3;
        grid-row: 1/2;
        justify-self: flex-end;
    }
`

export const SpanCalcCP = styled.span<any>`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: ${props => props.showSecondRow ? 'auto auto' : 'auto'};
    justify-content: center;
    row-gap: 5px;
    column-gap: 10px;
    grid-column: 1/3;
    grid-row: 2/3;
    width: 80%;
    justify-self: center;

    .input-calc {
        grid-column: 1/2;
        grid-row: 1/2;
        border-radius: 7px;
        border: 2px solid rgb(184 184 184);
        padding: 3px 5px;
        max-height: 1.5rem;
        justify-content: center;

        &:focus {
            outline: none !important;
            border: 2px solid rgb(250, 189, 0);
        }
    }

    .btn-calc {
        grid-column: 2/3;
        grid-row: 1/2;
        padding: 4px 10px;
        background-color: gray;
        color: white;
        font-weight: 700;
        letter-spacing: 1.5px;
        border-radius: 7px;
        border: 2px solid gray;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.6rem;
        max-height: 1.5rem;
        width: fit-content;
        justify-self: flex-end;

        &:hover {
            border-color: #5e5e5e;
            background-color: #5e5e5e;
        }

        &:focus {
            border-color: rgb(250, 189, 0);
        }
    }

    .error-postcode {
        grid-column: 1/3;
        grid-row: 2/3;
    }

`

export const ErrorP = styled.p<{showErr?: boolean}>`
    display: ${props => props.showErr ? 'block' : 'none'};
    font-size: 0.8rem;
    color: red;
`
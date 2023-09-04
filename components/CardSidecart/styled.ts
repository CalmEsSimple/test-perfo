import styled from "styled-components";

export const CardCart = styled.article`
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 9px;
    row-gap: 0px;
    grid-template-rows: repeat(3, auto);
    padding: 1rem 0.7rem;
    border-bottom: solid #eee 1px;

    .cart-img {
        grid-column: 1/2;
        grid-row: 1/4;
        height: 5rem;
        width: auto;
        object-fit: cover;
        border-radius: 2px;
    }

    .p-variation {
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1;
        align-self: center;
        color: #999;
        margin-top: -20px;
    }

    .product-name {
        color: rgb(250, 189, 0);
        font-family: ${props => props.theme.fonts.extraBold};
        font-size: 0.9rem;
        line-height: 1;
        grid-column: 2/4;
        grid-row: 1/2;
    }

    .product-variation {
        grid-column: 2/3;
        grid-row: 2/3;
    }

    .product-counter {
        grid-column: 1/4;
        grid-row: 3/4;
        align-self: flex-end;
    }

    .section-prices-container {
        grid-column: 3/4;
        grid-row: 2/4;
        align-self: flex-end;
    }

    .disc-price {
        color: #398245;
    }

    .product-price {
        font-size: 1rem;
        font-weight: 700;
    }

    .product-reg-price {
        text-decoration: line-through;
        color: #6E6E6E;
    }

    .product-delete, 
    .product-delete-disabled {
        justify-self: flex-end;
        grid-column: 3/4;
        grid-row: 1/2;
        background: none;
        border: none;
    }

    .product-delete:hover {
        cursor: pointer;
    }
`;


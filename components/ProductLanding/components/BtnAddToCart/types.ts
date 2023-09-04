import styled from "styled-components";

export const Button = styled.button`
    background-color: #8f4f9a;
    width: 100%;
    color: #fff;
    font-weight: 800;
    font-size: 1rem;
    text-align: center;
    padding: 1rem;
    border-radius: 10px;
    border: none;

    &:hover {
        background-color: #823f90;
        cursor: pointer;
    }

    &:disabled {
        background-color: gray;
    }
`
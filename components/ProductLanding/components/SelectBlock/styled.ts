import styled from "styled-components"

export const Select = styled.div`
    display: flex;
    gap: 10px;
    margin: 1rem 0;

    button {
        padding: 0.5rem;
        width: 7.5rem;
        text-align: center;
        background: none;
        border-radius: 5px;
        border: 2px solid gray;
    }

    .p-height {
        color: gray;
    }

    .selected {
        border: 2px solid rgb(250, 189, 0);
    }

`
import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const ModalSidecart = styled.article<{$isOpen?: boolean}>`

    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.60);
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    .modal-container {
        background-color: white;
        position: relative;
        overflow-y: auto;
        animation: ${slideInAnimation} 0.3s ease;
        height: 100vh;
        width: 90%;
        max-width: 375px;
        margin-left: 1.2rem;
    }

    .header-cart {
      position: relative;
    }

    .header-closer-2 {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
        position: absolute;
        right: 1rem;
        top: 1rem;
        z-index: 20;
    }
`

export const ImgGallery = styled.img`
    width: 90vw;
    border-radius: 10px;

`
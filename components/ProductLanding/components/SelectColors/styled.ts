import styled from "styled-components";

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin: 1rem 0;
`

export const Select = styled.div`
  display: flex;
  gap: 1rem;
`

export const BtnColor = styled.button<any>`
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.5px solid gray;
  outline: ${props => props.select ? "2px solid rgb(250, 189, 0);" : "0.5px solid gray"};
  outline-offset: .2rem;  
  cursor: pointer;
  padding: 0;
  background-color: transparent;

  &::before {
    content: "";
    position: absolute;
    width: 70%;
    height: 2px;
    background-color: red;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    width: 70%;
    height: 2px;
    background-color: red;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:disabled::before,
  &:disabled::after {
    opacity: 1;
  }
    
`
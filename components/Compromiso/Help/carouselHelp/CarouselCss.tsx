import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";



export const Gallery = styled.section`
  z-index: 0;
  position: relative;
`;

export const ButtonWrapper = styled.div<{$isNext?: boolean}>`
  background: #dadada;
  opacity: .2;
  position: absolute;
  top: 45%;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => !props.$isNext && "left: 0;"}
  ${props => props.$isNext && "right: 0;"}
  padding: ${props => props.$isNext ? "1.1em 0 1.2em .8em" : "1.1em .8em 1.2em 0"};
  border-radius: ${props => props.$isNext ? ".5em 0 0 .5em" : "0 .5em .5em 0"};
  @media ${props =>  props.theme.devices.mobile} {
    padding: ${props => props.$isNext ? "0.60em 0 0.60em .4em" : "0.60em .4em 0.60em 0"};
  }
`;

export const BackButton = styled(IoIosArrowBack)<{$isNext?: boolean}>`
  ${props => props.$isNext && "transform: rotate(180deg);right: 0;"}
  font-size: 2rem;
  color: ${props => props.theme.colors.millionGray};
  transition: all 0.2s;

  &:hover {
    ${props => props.$isNext ? "transform: rotate(180deg) translateX(-2px);" : "transform: translateX(-2px);"}
  }
`;

export const PillWrapper = styled.div`
  position: absolute;
  top: 1em;
  width: 100%;
  left: 1em;
  p {
    font-size: 1em !important;
  }
`;
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

export const Gallery = styled.section`
  z-index: 0;
  position: relative;

  .thumb {
    width: 135px !important;
    border: none !important;
    transition: all 0.1s;

    &:hover {
      opacity: .75;
      cursor: pointer;
    }
  }
  .thumb.selected {
    outline: 5px solid rgba(255, 255, 255, .75);
    outline-offset: -5px;
    border: none !important;
  }
`;

export const MainImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
`;

export const DivMiniImg = styled.div`
  display: flex;
  white-space: nowrap;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome browsers */
  }
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Mozilla */
  }
`;

export const MiniImg = styled.img`
  width: 100%;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    opacity: 0.5;
  }
`;

export const BtnFullScreen = styled.button`
  width: 20px;
  position: absolute;
  bottom: 1rem;
  z-index: 20;
  right: 1rem;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 1.5rem;
  }
`;

export const ButtonWrapper = styled.div<{$isNext?: boolean}>`
  background: #dadada;
  opacity: .4;
  position: absolute;
  top: 45%;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => !props.$isNext && "left: 0;"}
  ${props => props.$isNext && "right: 0;"}
  padding: ${props => props.$isNext ? "1.8em 0 1.8em .8em" : "1.8em .8em 1.8em 0"};
  border-radius: ${props => props.$isNext ? ".5em 0 0 .5em" : "0 .5em .5em 0"};
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
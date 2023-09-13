import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

export const SliderContainer = styled.div`
  width: 100%;
  .control-dots {
    margin: 20px 0;
  }
  .carousel .control-dots .dot {
    box-shadow: none;
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
    opacity: .2;
    transition: none;
  }
  .carousel .control-dots .dot.selected {
    background-color: white;
    box-shadow: none;
    opacity: 1;
  }
`;

export const SliderWrapper = styled.div<{$color: string, $imageSrc: string}>`
  height: calc(100vh - 120px);
  background-color: ${props => props.$color};
  background-image: url(${props => props.$imageSrc});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #2d2d2d1c;
  @media ${props => props.theme.devices.mobile} {
    height: calc(100vh - 105px);
    max-height: 768px;
  }
`;

export const PlainImage = styled.img`
  height: 0;
`;
export const LCPImage = styled.img`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 99vw;
  height: 99vh;
  max-width: 99vw;
  max-height: 99vh;
`;

export const ButtonWrapper = styled.div<{$isNext?: boolean}>`
  background-color: #F5F5F5;
  position: absolute;
  top: 45%;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => !props.$isNext && "left: 0;"}
  ${props => props.$isNext && "right: 0;"}
  padding: ${props => props.$isNext ? ".8em 0 .8em .4em" : ".8em .4em .8em 0"};
  border-radius: ${props => props.$isNext ? ".5em 0 0 .5em" : "0 .5em .5em 0"};
`;

export const BackButton = styled(IoIosArrowBack)<{$isNext?: boolean}>`
  ${props => props.$isNext && "transform: rotate(180deg);right: 0;"}
  font-size: 1.8rem;
  color: ${props => props.theme.colors.millionGray};
`;

export const Wrapper = styled.div`
  height: 100%;
  margin-left: 10%;
  width: 50%;
  position: relative;
  @media ${props => props.theme.devices.biggerMobile} {
    margin-left: 0;
    width: 100%;
  }
`;

export const BannerTitle = styled.h1`
  color: #fafafa;
  font-size: 76px;
  font-weight: 700;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 1em;
  letter-spacing: -1.1px;
  text-decoration: none;
  font-family: ${props => props.theme.fonts.extraBold};
  text-shadow: 0 0 0 #fff;
  padding-top: 0.5em;
  @media ${props => props.theme.devices.biggerMobile} {
    padding: 50px 0 0 16px;
    font-size: 40px;
  }
`;

export const BannerSubtitle = styled.h3`
  color: #fafafa;
  font-size: 1.9em;
  font-weight: 100;
  text-transform: none;
  text-decoration: none;
  letter-spacing: -.6px;
  text-shadow: 0 0 0 #fff;
  padding-top: 0.5em;
  padding-bottom: 1em;
  @media ${props => props.theme.devices.biggerMobile} {
    padding: 9px 0 0 16px;
    font-size: 18px;
  }
`;

export const Button = styled.a`
  width: fit-content;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 1.4em;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: .3px;
  fill: #fff;
  color: #fff;
  background-color: #f5a203;
  border-style: solid;
  border-width: 0;
  border-radius: 12px 12px 12px 12px;
  padding: 0.6em 3em 0.8em;
  text-shadow: 0 0 0 #fff;
  transition: all .3s;
  &:hover {
    color: #fabd00;
    background-color: #fff;
  }

  @media ${props => props.theme.devices.biggerMobile} {
    bottom: 10%;
    right: 20%;
    position: absolute;
    font-size: 20px;
  }
`;


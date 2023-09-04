import styled, { keyframes } from "styled-components";

export const spinAnimation = keyframes`
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`;

export const SpinnerContainer = styled.div`
  width: 15px;
  height: 15px;
  display: inline-block;
  overflow: hidden;
  background: rgba(241, 242, 243, 0);
`;

export const SpinnerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateZ(0) scale(0.15);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

export const RotatingDiv = styled.div`
  position: absolute;
  animation: ${spinAnimation} 1s linear infinite;
  width: 80px;
  height: 80px;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  box-shadow: 0 2px 0 0 #1c4595;
  transform-origin: 40px 41px;
  box-sizing: content-box;

`;
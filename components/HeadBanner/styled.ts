import styled, { keyframes } from "styled-components";

export const StyledBanner = styled.div`
  /* height:30px; */
  width: 100%;
  text-align: center;
  font-weight:700;
  font-size:0.9rem;
  display:flex;
  justify-content:center;
  align-items:center;
  line-height: 30px;
  
  @media (max-width: 500px) {
    font-size:1rem;
  }
`;

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const MarqueeContainer = styled.div`
  position: relative;
  white-space: initial;
  overflow: auto;
  line-height: 30px;
  @media (max-width: 500px) {
    /* white-space: nowrap; */
    overflow: hidden;
  }
`;

export const MarqueeContent = styled.div`
  animation: none;
  font-weight: 500;
  font-size: 1em;
  @media (max-width: 500px) {
    /* ANIMACION MARQUESINA */
    /*animation: ${marqueeAnimation} 9s linear infinite;*/
  }
  p {
    font-weight: 500;
  }
  strong {
    font-family: ${props => props.theme.fonts.extraBold};
  }
`;

export const Bullet = styled.span`
  margin: 0 10px;
`;
import styled from "styled-components";

export const DivColchon = styled.section`
  background-image: url(https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/63de805c-d8df-4040-1eaa-261272089d00/public);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 75% auto;
  margin-top: 2em;
  font-family: ${props => props.theme.fonts.bold};
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    background-image: url(https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/41000239-9f87-4a9d-67cf-c28855ee0400/public);
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100vw auto;
    background-color: #f8f8f8;
  }
`;

export const DivCalm = styled.div<{$showInfo:boolean}>`
  min-height: 24em;
  width: 39%;
  background-color: #fabd00;
  border-radius: 0 44px 44px 0;
  display: flex;
  justify-content: flex-start;

  @media (min-width: 1200px) {
    justify-content: center;
  }
  @media (min-width: 1400px) {
    min-height: 33em;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: initial;
    width: 100%;
    min-height: ${props => props.$showInfo ? "26em" : "22em"};
  }
`;

export const DivContent = styled.div<{$showInfo:boolean}>`
  margin: 1rem 0 1rem 2rem;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 2rem 1rem 2rem;
    min-height: ${props => props.$showInfo ? "26em" : "23em"};
  }
`;

export const DivText = styled.div`

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 2rem;
  }
`;

export const DivButton = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const DivEmpty = styled.div`
  width: 61%;

  @media (max-width: 768px) {
    background-color: initial;
    width: 0%;
  }
`;

export const TitleCalm = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: 2.8vw;
  font-family: ${props => props.theme.fonts.regular};
  font-weight: 100;
  margin-top: 2rem;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    color: ${props => props.theme.colors.offBlack};
    font-weight: 100;
    font-size: 2em;
  }
`;

export const TitleBoldCalm = styled.b`
  font-family: ${props => props.theme.fonts.extraBold};
`;

export const Buttoncalm = styled.a`
    margin-bottom:1rem ;
  font-size: 1.2vw;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.extraBold};
  text-decoration: none;
  fill: #fabd00;
  color: ${props => props.theme.colors.yellowCalm};
  background-color: #fff;
  border-style: solid;
  border-width: 1px;
  border-color: #fabd00;
  border-radius: 8px 8px 8px 8px;
  padding: 10px 60px 10px 60px;
  font-weight: 800 !important;
  display: inline-block;

  &:hover {
    color: white;
    background-color: #5700aa;
    transform: scale(0.9);
    transition: transform 0.3s ease;
    transform-origin: center;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    background-color: #5700aa;
    border-color: #5700aa;
    font-weight: 600;
    align-items: center;
    color: ${props => props.theme.colors.white};
    font-size: 1em;
    padding: 9px 33px 9px 33px;
    border-radius: 20px 20px 20px 20px;

    &:hover {
      color: ${props => props.theme.colors.white};
      transform: initial;
      background-color: #5700aa;
      cursor: pointer;
    }
  }
`;

export const TextCuotas = styled.h4`
  color: ${props => props.theme.colors.white};
  font-size: 0.9vw;
  font-weight: 400;
  margin: 0px 0px 20px 0px;
  font-family: ${props => props.theme.fonts.regular};

  @media (max-width: 768px) {
    font-family: ${props => props.theme.fonts.medium};
    font-size: 0.8em;
    color: ${props => props.theme.colors.millionGray};
    font-weight: 500;
  }
`;

export const FromText = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: 1.3vw;
  font-weight: 400;
  text-align: left;
  margin: 0;
  font-family: ${props => props.theme.fonts.medium};

  @media (max-width: 768px) {
    color: ${props => props.theme.colors.offBlack};
    font-size: 1.4em;
    display: inline-block;
  }
`;
export const Price = styled.span`
padding-right: 5px;
color: ${props => props.theme.colors.white};
  font-size: 2vw;
  font-weight: bold;
  font-weight: 800;
  font-family: ${props => props.theme.fonts.extraBold};

  @media (max-width: 768px) {
    color: ${props => props.theme.colors.offBlack};
    font-size: 1.5em;
  }
`;

export const PriceLine = styled.span`
  text-decoration: line-through;
  color: ${props => props.theme.colors.millionGray};
  font-weight: 400;
  font-size: 2vw;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-right: 5px;
  }
`;

export const DivButtonInfoExtra = styled.div`
  font-size: 0.8em;
  @media (max-width: 768px) {
    font-size: 0.65em;
  }
`;

export const ListInfoExtra = styled.ul`
  margin: 0.5rem 0 0.5rem 0;
  font-family: ${props => props.theme.fonts.regular};
  list-style: none;
  text-align: left;
  line-height: 1.2;
  padding: 0px;
  > li a {
    text-decoration: none !important;
    color: ${props => props.theme.colors.white} !important;
  }

  @media (max-width: 768px) {
    > li a {
      color: ${props => props.theme.colors.offBlack} !important;
    }
  }
`;

export const Bold = styled.b`
  font-family: ${props => props.theme.fonts.extraBold};
`
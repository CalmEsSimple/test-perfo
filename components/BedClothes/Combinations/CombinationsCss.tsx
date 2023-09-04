import styled from "styled-components";

export const DivCombinations = styled.section`
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 0% 12.5% 0% 12.5%;

  @media (max-width: 769px) {
    padding: 0% 1% 0% 1%;
  }
`;

export const DivInformation = styled.div`
  display: flex;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const DivImages = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 769px) {
    width: 95%;
    order: 2;
  }
`;

export const DivTexts = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 769px) {
    width: 95%;
    order: 1;
  }
`;

export const DivDivisor = styled.div`
  background-color: #f4f4f4;
  border-radius: 8px 8px 8px 8px;
  margin-bottom: 0.5em;
  display: flex;
  padding: 10px;
`;

export const DivDivisorImg = styled.div`
  width: 20%;
`;

export const Img = styled.img`
  height: auto;
  max-width: 100%;
  width: 100%;
  border-radius: 8px 8px 8px 8px;
`;

export const DivDivisorText = styled.div`
  width: 80%;
  padding-left: 0.5rem;
`;
export const Description = styled.h2`
  color: #191919cc;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 0.8em;
  font-weight: 200;
  text-align: left;

  > b {
    font-family: ${props => props.theme.fonts.extraBold};
  }
`;

export const DivBar = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  background: linear-gradient(90deg, #fabd01 0%, #823f90 100%);
  border-radius: 8px;
  height: 1em;
  width: 100%;
`;

export const DivBarImgs = styled.div`
  display: flex;
  margin: 1rem 1rem 0 1rem;
`;

export const DivImgHot = styled.div`
  width: 50%;
`;

export const DivImgCold = styled.div`
  width: 50%;
`;

export const ImgHot = styled.img`
  width: 10%;
`;

export const ImgCold = styled.img`
  width: 10%;
  float: right;
`;

export const DivCombinationsText = styled.div`
  padding: 0 3rem 0 3rem;

  @media (max-width: 769px) {
    padding: 0 0 0 1rem;
  }
`;

export const TitleText = styled.p`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 1.3em;
  font-weight: 600;
  color: #191919cc;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  color: #999999;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 0.9em;
  font-weight: 200;
  line-height: 1.2em;
`;

import styled from "styled-components";

export const DivUnboxing = styled.section`
  margin-top: 2em;
  margin-bottom: 0em;
  padding: 0% 12.5% 0% 12.5%;

  @media (max-width: 768px) {
    padding: 0% 2.5% 0% 2.5%;
  }
`;

export const Title = styled.p<{$isCombo?: boolean}>`
  color: ${props => props.$isCombo ? props.theme.colors.yellowCalm : "#999999"};
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 1.7em;
  font-weight: 200;
  text-align: center;
  ${props => !props.$isCombo && "margin-bottom: 3rem;"}

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const Subtitle = styled.p`
  color: ${props => props.theme.colors.yellowCalm};
  font-size: 1.2em;
  font-weight: 200;
  text-align: center;
  margin: 1em 0;
`;

export const Iframe = styled.iframe`
  border-radius: 15px;
  width: 100%;
  height: 436px;

  @media (max-width: 768px) {
    height: 300px;
  }
  @media (min-width: 998px) {
    height: 576px;
  }
  @media (max-width: 698px) {
    height: 210px;
  }
`;

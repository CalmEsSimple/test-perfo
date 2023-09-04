import styled from "styled-components";

export const DivBackground = styled.section`
  background-color: #f9f9f9;
`;

export const DivExperience = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3% 0;
  width: 1100px;
  margin: auto;

  @media (max-width: 1200px) {
    width: 90%;
    padding-top: 5%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

  }
`;

export const DivImage = styled.div`
  width: 57%;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  border-radius: 10px 10px 10px 10px;
`;

export const DivTexto = styled.div`
  padding-left: 40px;
  text-align: left;
  width: 43%;

  @media (max-width: 768px) {
    width: 95%;
    padding-left: 0px;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.offBlack};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1.9em;
  font-weight: 100;
  line-height: 1em;
  letter-spacing: -0.2px;
  margin: 1rem 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;

export const Bold = styled.b`
  font-family: ${props => props.theme.fonts.extraBold};
`

export const Text = styled.h2`
  color: #303030;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 16px;
  font-weight: 100;
  line-height: 1.4em;
  letter-spacing: -0.2px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

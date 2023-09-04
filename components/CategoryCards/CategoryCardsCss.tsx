import styled from "styled-components";

export const DivCards = styled.section`
  padding: 0% 10.5% 0% 10.5%;
  margin: 3rem 0;

  @media (max-width: 800px) {
    padding: 0% 4% 0% 4%;
  }
`;

export const DivText = styled.div`
  text-align: center;

  @media (max-width: 800px) {
    padding: 2rem 0 3rem 0;
  }
`;

export const TitleCards = styled.h1`
  color: #303030;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 1.6em;
  font-weight: 800;
`;

export const TextCards = styled.h3`
  color: #c4c4c4;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1.2em;
  font-weight: 200;
`;

export const DivCardsContaner = styled.div`
  margin: 20px;
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 20px;

  @media (max-width: 800px) {
    padding: 0;
  }
`;

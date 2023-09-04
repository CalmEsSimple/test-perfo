import styled from "styled-components";

export const DivExperience = styled.section`
  background-color: #f5f5f5;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export const DivLimit = styled.div`
  max-width: 900px;
  text-align: center;
  margin: auto;
  padding: 5px;
  @media (max-width: 768px) {
    width: 100%
  }
`;

export const Title = styled.h2`
  color: #999999;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1.8em;
  font-weight: 100;
  text-align: center;
  margin: 0.5rem 0 2rem 0;

  @media (max-width: 768px) {
    font-size: 1.2em;
    margin: 0 0 2rem 0;
  }
`;

export const LineBreak = styled.br`
  display: none;
  @media (max-width: 768px) {
    display:block;
  }
`;

export const DivInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;

  @media (min-width: 1000px) {
     margin: 0 auto;
  }
`;

export const DivUnit = styled.div`
  width: 20%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2rem 1fr;
  align-items: flex-start;
  justify-content: center;
  row-gap: 10px;

  @media (max-width: 768px) {
     width: 33.3%;
  }
`;

export const ImgTitle = styled.img`
  margin: 0 auto;
  height: 5vh;
  object-fit: contain;
`;

export const TextUnit = styled.h4`
  color: #999999;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 12px;
  font-weight: normal;
  margin-top: 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Bold = styled.b`
  font-family: ${props => props.theme.fonts.extraBold};
`

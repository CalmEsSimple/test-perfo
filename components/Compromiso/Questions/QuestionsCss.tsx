import styled from "styled-components";

export const DivQuestions = styled.section`
  width: 57%;
  margin: auto;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    padding: 2% 3.5% 0% 3.5%;
    width: 90%;
  }
`;

export const DivAccordion = styled.div`
  @media (min-width: 768px) {
  }
`;

export const Tittle = styled.h2`
  color: rgba(25, 25, 25, 0.8);
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 2em;
  font-weight: 800;
  text-align: center;
  margin: 3rem 0 1rem 0;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 2.5rem;
    font-size: 21px;
  }
`;

export const DivContainerAccordion = styled.div`
  width: 100%;
  @media (min-width: 768px) {
  }
`;

export const DivTitleAccordion = styled.div`
  background-color: #f9f9f9;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  cursor: pointer;
`;

export const DivTextAccordion = styled.div`
  background-color: #f9f9f9;
  margin-top: 0rem;
  padding: 0px 20px 0px 20px;

  @media (max-width: 768px) {
    border-top: 0px;
  }
`;

export const TittleAccordion = styled.h3`
  background-color: #f9f9f9;
  padding: 0;
  margin: 0.7rem;
  font-weight: 600;
  line-height: 1;
  font-family: ${props => props.theme.fonts.extraBold};
  color: #999999;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  user-select: none;
`;

export const DescriptionAccordion = styled.div`
  background-color: #f9f9f9;
  color: #7A7A7A;
  padding: 10px;
  margin-bottom: 40px;
  font-family: ${props => props.theme.fonts.regular};
  font-weight: 400;
  font-size: 10pt;
  text-align: left;
`;

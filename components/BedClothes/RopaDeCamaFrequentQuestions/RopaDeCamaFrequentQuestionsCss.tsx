import styled from "styled-components";

export const DivContainer = styled.section`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  color: #999999;
  font-family: ${props => props.theme.fonts.bold};
  font-size: 1.5em;
  font-weight: 100;
  margin: 3rem 0 2rem 0;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

export const DivAccordion = styled.div`
  width: 70%;
  margin: auto;
  text-align: left;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (min-width: 998px) {
    border-style: solid;
    border-width: 1px;
    border-color: #c4c4c4;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0 0 0 0 rgba(0,0,0,.5);
  }
`;

export const DivContainerAccordion = styled.div`
  width: 100%;

    @media (min-width: 998px) {
      border-style: solid;
    border-width: 0px 0px 1px 0px;
    border-color: #c4c4c4;
  }

  @media (max-width: 768px) {
    padding: 0 0 2rem 0;
  }
`;

export const DivTitleAccordion = styled.div`
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  cursor: pointer;

`;

export const DivTextAccordion = styled.div`
`;

export const TittleAccordion = styled.h3`
  padding: 0;
  margin: 0.7rem;
  color: #303030;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 0.9em;
  font-weight: 800;
  cursor: pointer;
`;

export const DescriptionAccordion = styled.div`
  transition: all 0.35s;
  line-height: 1.5;
  padding: 1rem 0 1rem 0;
  font-weight: 300;
  font-family: ${props => props.theme.fonts.regular};
  color: #999999;
  border-top: solid;
  border-width: 1px 0px 0px 0px;
  border-top-color: #c4c4c4; 
  padding: 1rem 30px 0px 2rem;
  margin-bottom: 3rem;

  > div a {

color: rgb(250 189 0);
}
`;

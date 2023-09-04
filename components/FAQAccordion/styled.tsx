import styled from "styled-components";

export const DivContainer = styled.section`
  text-align: center;
`;

export const Title = styled.h2`
  color: rgba(25, 25, 28, 0.8);
  font-family: ${props => props.theme.fonts.extraBold};
  margin: 3.5rem 0 1rem 0;
  font-weight: 800;


  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

export const DivAccordion = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid rgba(250, 189, 0, 0.99);
  text-align: left;
  max-width: 700px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const DivContainerAccordion = styled.div`
  border-bottom: 1px solid rgba(250, 189, 0, 0.99);
  width: 100%;
`;

export const DivTitleAccordion = styled.div`
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  cursor: pointer;
`;

export const DivTextAccordion = styled.div`
  margin-top: 0rem;
  padding-top: 0px;
  padding-bottom: 0px;
`;

export const TittleAccordion = styled.h3`
  padding: 0;
  margin: 0.7rem;
  color: rgba(25, 25, 28, 0.8);
  line-height: 1;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  outline: none;
`;

export const DescriptionAccordion = styled.p`
  margin-top: 0px;
  transition: all 0.35s;
  padding: 10px 20px 30px 20px;
  line-height: 1.5;
  color: rgba(25, 25, 28, 0.8);
  font-family: ${props => props.theme.fonts.regular};
  font-weight: 500;
  padding: 20px;
  border-top: 1px solid rgba(250, 189, 0, 0.99);


  > div a {

    color: rgb(250 189 0);
  }
`;

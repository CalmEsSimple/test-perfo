import styled from "styled-components";

export const DivEmpathy = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 3%;
  padding-top: 0;
  width: 1000px;
  margin: auto;
  
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const DivText = styled.div`
  width: 33.3%;
`

export const DivTextSeparator = styled.div`
 width: 33.3%;
 padding-left: 40px;
 padding-right: 40px;
`

export const Titles = styled.h2`
  color: ${props => props.theme.colors.offBlack};
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 1.7em;
  font-weight: 100;
  letter-spacing: 0px;
  margin: 0px;
`;

export const Text = styled.p`
  color: #303030;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 16px;
  font-weight: 100;
  line-height: 1.4em;
  margin: 0px;
`;


export const DivContainerAccordion = styled.div`
  padding: 0% 2% 0% 2%;
  background-color: #f9f9f9;
  width: 95%;
  margin: 3% 0 3% 0;
`

export const DivTitleAccordion = styled.div`
 padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  cursor: pointer;
`

export const DivTextAccordion = styled.div`
  margin-top: 0rem;
  padding: 0px 20px 0px 20px;
`


export const TittleAccordion = styled.h3`
  flex-basis: 75vw;
  color: #803f80;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 1.1em;
  font-weight: 700;
  letter-spacing: 0px;
  margin: 0px;
`;

export const DescriptionAccordion = styled.div`
  color: #7A7A7A;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 15px;
  font-weight: 100;
  line-height: 1.4em;
  margin: 0px;
  width: 90%;
  padding:  20px 0px 20px 0px;
`;

export const Bold = styled.b`
  font-family: ${props => props.theme.fonts.extraBold};
`

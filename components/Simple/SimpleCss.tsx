import styled from "styled-components";

export const DivSimple = styled.section``;

export const TitleSimple = styled.h2`
  color: #e98a05;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 2em;
  font-weight: 100;
  text-align: center;

  margin: 2rem 0 1rem 0;
`;

export const BodySimple = styled.div`
 padding: 0 4.8em;
  display: flex;

  @media (min-width: 998px) {
    width: 80%;
    margin: auto;
  }
`;

export const DivUnit = styled.div`
  flex-basis: 33.3%;
  padding: 10px;
 
`;

export const TitleDivs = styled.h2`
  color: #e98a05;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1.3em;
  font-weight: 100;
  letter-spacing: 0.5px;
`;

export const TextDivs = styled.p`
  color: #666;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 0.90em;
  font-weight: 400;
  line-height: 1.4em;
    padding: 10px 20px 10px 0px;
`;


export const DivContainerAccordion = styled.div`
  padding: 2% 3%;
  background-color: white;
  width: 100%;
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
  color: #e98a05;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1em;
  font-weight: 800;
  letter-spacing: 0px;
  margin: 0px;

  @media (max-width: 768px) {
    font-weight: 100;
  }

  > b {
    font-family: ${props => props.theme.fonts.extraBold};
  }
`;

export const DescriptionAccordion = styled.div`
    color: #666666;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4em;
  margin: 0px;
  width: 90%;
  padding:  20px 0px 20px 0px;
`;

export const Bold = styled.b`
  font-family: ${props => props.theme.fonts.extraBold};
`
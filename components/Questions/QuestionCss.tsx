import styled from "styled-components";

export const DivContainer = styled.div`
  padding: 2% 15.5%;
  margin: 3% 0;

  @media (max-width: 768px) {
    padding: 2% 3.5%;
  }
`;

export const DivAccordion = styled.div`
  @media (min-width: 768px) {
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #c4c4c4;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
  }
`

export const Tittle = styled.h2`
  color: #999999;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1.9em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    text-align: center;
    margin-bottom: 2.5rem;
  }
`;

export const Bold = styled.b`
  font-family: ${props => props.theme.fonts.extraBold};
`



export const DivContainerAccordion = styled.div`
 border-radius: 6px;
 width: 100%;
  @media (min-width: 768px) {
    border-bottom: 1px solid #99999980;
  }
`

export const DivTitleAccordion = styled.div`
 padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  cursor: pointer;
`

export const DivTextAccordion = styled.div`
  margin-top: 0rem;
`


export const TittleAccordion = styled.h3`
  padding: 0;
  margin: 0.7rem;
  font-weight: 700;
  line-height: 1;
  font-family: ${props => props.theme.fonts.extraBold};
  color: ${props => props.theme.colors.offBlack};
    font-weight: 700;
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  user-select: none;
`;

export const DescriptionAccordion = styled.div`
    border-top: 1px solid #99999980;
  color: #999999;
  padding:  10px 20px 10px 20px;
  margin-bottom: 40px;
  font-family: ${props => props.theme.fonts.regular};
  font-weight: 300;
  line-height: 1rem;
  text-align: left;

  > a {
    text-decoration: none;
  color: rgb(250 189 0);
  }

  @media (max-width: 768px) {
    border-top: 0px;
  }
`;


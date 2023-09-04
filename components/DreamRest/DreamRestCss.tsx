import styled from "styled-components";

export const DivDreamRest = styled.section`
  margin: 35px 0;
`;

export const TitleDreamRest = styled.h2`
  color: ${props => props.theme.colors.millionGray};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 2rem;
  font-weight: 100;
  text-align: center;
  overflow: hidden;
  margin: 0 auto;
  line-height: 1;

  @media (max-width: 768px) {
    margin-bottom: 0;
    font-size: 2em;
  }
`;

export const LineBreak = styled.br`
  display: none;
  @media (max-width: 768px) {
    display:block;
  }
`;

export const DivImages = styled.div`
  padding: 0% 11.5%;
  display: flex;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media (max-width: 1023px){
    padding: 3%;
  }
`;

export const RowImages = styled.div`
  width: 67%;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ColumnImages = styled.div`
  width: 32.99%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
`;

export const FirstRow = styled.a`
  flex-basis: 63.02%;
  max-width: 100%;
  padding: 10px;
  position: relative;

  @media (max-width: 768px) {
    flex-basis: 50%;
    padding: 5px;
  }
`;

export const DivImg = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  border-radius: 8px 8px 8px 8px;

  @media (max-width: 768px) {
 height: 12em;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

export const SecondRow = styled.a`
  flex-basis: 37%;
  max-width: 100%;
  padding: 10px;
  position: relative;

  @media (max-width: 768px) {
    padding: 5px;
    flex-basis: 50%;
  }
`;


export const DivPill = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`;

export const OfferTextRow = styled.p`
  color: #fff;
  background-color: #8F4F9A;
  padding: 8px;
  border-radius: 15px;
  color: #999999;
  font-family: ${props => props.theme.fonts.bold};
  font-size: 0.7em;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #f8f8f8;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.5em;
    left: 13%;
  }
`;

export const OfferTextColumn = styled.p`
  color: #fff;
  background-color: #8F4F9A;
  padding: 8px;
  border-radius: 15px;
  color: #999999;
  font-family: ${props => props.theme.fonts.bold};
  font-size: 0.7em;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #f8f8f8;
  text-transform: uppercase;

  @media (max-width: 768px) {   
    bottom: 25%;
    font-size: 0.5em;
  }
`;

export const TitleOfferText = styled.p`
  text-decoration: none !important;
  color: #f8f8f8;
  font-family: ${props => props.theme.fonts.bold};
  font-size: 1.3em;
  font-weight: 600;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1em;
    
  }
`;

export const FirstColumn = styled.a`
  max-width: 100%;
  padding: 10px 10px 0 10px;
  position: relative;

  @media (max-width: 768px) {
    padding: 5px;
    flex-basis: 50%;
  }
`;

export const SecondColumn = styled.a`
  max-width: 100%;
  padding: 10px;
  position: relative;

  @media (max-width: 768px) {
    padding: 5px;
    flex-basis: 50%;
  }
`;

export const Bold = styled.b`
  font-family: ${props => props.theme.fonts.extraBold};
  
`
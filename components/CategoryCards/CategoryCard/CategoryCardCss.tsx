import styled from "styled-components";

export const OfferText = styled.p`
  position: absolute;
  z-index: 10;
  margin-top: 10px !important;
  margin-left: 10px !important;
  background: #8f4f9a;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 15px;
  font-family: ${props => props.theme.fonts.medium};
  font-size: 10px;
`;

export const DivUnit = styled.div`
  position: relative;
  margin: 0.4rem 0.4rem 2rem 0.4rem;
  text-align: left;
  display: inline-block;
  width: 280px;

  @media (max-width: 800px) {
    width: auto;
  }

`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8%;
`;

export const Name = styled.h2`
  font-family: ${props => props.theme.fonts.regular};
  font-weight: 100;
  color: #303031;
  text-transform: lowercase;
  font-size: 1.1em;
  margin-bottom: 0px;
  margin-top: 5px;

  @media (max-width: 800px) {
    font-size: 1.4em;
  }
`;

export const Description = styled.h2`
  font-weight: 800;
  font-family: ${props => props.theme.fonts.extraBold};
  color: #303031;
  margin-bottom: 0;
  text-transform: lowercase;
  font-size: 1.1rem;

  @media (max-width: 800px) {
    font-size: 1.3em;
  }
`;

export const DivPrice = styled.div`
  font-family: ${props => props.theme.fonts.bold};
  font-weight: 200;
  font-size: 1em;
  color: #303030;
  margin-top: -2px !important;
  margin-bottom: 0;
`;

export const Price = styled.span`
  color: #303030;
  font-weight: 500;
  font-family: ${props => props.theme.fonts.medium};
  margin-top: -5px !important;
  font-size: 1.1em;

  @media (max-width: 800px) {
    font-size: 1.4em;
    padding: 2rem 0 2rem 0;
  }
`;

export const PriceStrikeThrough = styled.span`
  color: #303030;
  text-decoration: line-through;
  font-weight: 200;
  font-family: ${props => props.theme.fonts.medium};
  font-size: 0.9em;

  @media (max-width: 800px) {
    font-size: 1.2em;
  }
`;



export const TextCuotas = styled.p`
  font-size: 0.8em;
  color: #999;
  font-weight: 100;
  font-family: ${props => props.theme.fonts.regular};

  @media (max-width: 800px) {
    font-size: 1em;
  }
`;

import Image from "next/image";
import styled from "styled-components";

export const DivRest = styled.section<{ $fromProduct?: boolean }>`
  padding: 2.5rem 1rem;
  background-color: ${(props) => props.$fromProduct ? props.theme.colors.lynxWhite : ""};
`;

export const DivRestMobile = styled.section`
  margin: 1rem 0;
  padding: 1rem;
  max-width: 650px;
`;

export const LineBreak = styled.br`
  display: none;
  @media (max-width: 768px) {
    display:block;
  }
`;

export const DivAlwaysScroll = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 5%;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  } 
`;

export const DivScroll = styled.div`
  @media (max-width: 1100px) {
    overflow-x: scroll;
    white-space: nowrap;
    ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 5%;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  } 
  }
`;

export const TitleRest = styled.h2<{ $isYellowTitle?: boolean }>`
  color: ${(props) => props.$isYellowTitle ? props.theme.colors.yellowCalm : props.theme.colors.millionGray};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1.7em;
  font-weight: 300;
  text-align: center;
  margin: 1rem 0 0.5rem 0;
  @media ${props => props.theme.devices.mobile} {
    width: 90%;
    margin: 0 auto 1rem;
    font-size: 2rem;
    line-height: 1;
  }
`;

export const Bold = styled.b`
  font-family: ${(props) => props.theme.fonts.extraBold};
`;

export const DivCategoriesMobile = styled.div<{ $fromCart?: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: ${props => props.$fromCart ? "unset" : "flex-start"};
  width: 100%;
`;

export const DivCategories = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    justify-content: flex-start;
  }

  @media (min-width: 1300px) {
    margin-left: 13%;
    margin-right: 13%;
  }

  @media (max-width: 768px) {
    min-width: 800px;
  }
`;

export const Article = styled.article`
  display: flex;
  margin: 0.4rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivUnit = styled.div`
  width: auto;
  max-width: 100%;
  position: relative;
  height: max-content;

  &:hover {
    color: #ffffff;
  }
`;

export const OfferText = styled.p<{ $textNew?: boolean }>`
  position: absolute;
  z-index: 10;
  margin-top: 10px !important;
  margin-left: 10px !important;
  background-color: ${props => props.$textNew ? "rgb(250, 189, 0);" : "#8f4f9a;"};
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 15px;
  font-family: ${props => props.theme.fonts.medium};
  font-size: 10px;
`;

export const Link = styled.a`
  color: #fabd00;
`;

export const Img = styled(Image)<{ $fromCart?: boolean }>`
  width: ${props => props.$fromCart ? '' : '14rem'};
  height: ${props => props.$fromCart ? '8rem' : '9rem'};
  border-radius: ${props => props.$fromCart ? '0px' : '10px'};
  object-fit: cover;

  @media (min-width: 1400px) {
    width: ${props => props.$fromCart ? '' : '20rem'};
  height: ${props => props.$fromCart ? '8rem' : '15rem'};
  }
`;

export const TitleUnit = styled.h4`
    word-break:break-all;
    white-space: break-spaces;
    font-family: ${props => props.theme.fonts.regular};
    font-weight: 100;
    color: #303031;
    text-transform: lowercase;
    font-size: 1.1em;
`;

export const TitleUnitBold = styled.h4<{ $fromCart?: boolean }>`
    /* word-break:break-all; */
    white-space: break-spaces;
    font-weight: 600;
    font-family: ${props => props.theme.fonts.extraBold};
    color: ${props => props.$fromCart ? '#999' : '#303031'};
    margin-bottom: 0;
    text-transform: capitalize;
    font-size: ${props => props.$fromCart ? "0.9rem" : '1.1em'};
`;

export const From = styled.p`
    color: #303030;
    font-weight: 200;
    font-family: ${props => props.theme.fonts.regular};
`;

export const Price = styled.span`
    color: #303030;
    text-decoration: line-through;
    font-weight: 200;
    font-family: ${props => props.theme.fonts.regular};
`;

export const OfferPrice = styled.span<{ $fromCart?: boolean }>`
    color: ${props=> props.$fromCart ? props => props.theme.colors.dullViolet : '#303030'};
    font-weight: 800;
    font-family: ${props => props.theme.fonts.extraBold};
    margin-top: -5px !important;
    font-size: ${props => props.$fromCart ? "0.9rem" : '1.1em'};
`

export const Props = styled.p`
    margin-top: 0.1rem;
    color: #303030;
    white-space: break-spaces;
    font-size: 0.8rem;
    span {
      color: #999;
    }
`

export const AddToCart = styled.button`
  background-color: #8f4f9a;
  color: #fff;
  border: none;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    background-color: #5a2263;
  }
`
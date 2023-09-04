import styled from "styled-components";

export const OfferText = styled.p<{ $textNew?: boolean, $isRelatedProducts?: boolean, $isCategoriesSection?: boolean, $isFeatureProduct?: boolean }>`
  position: absolute;
  z-index: 10;
  font-family: ${props => props.theme.fonts.medium};
  font-size: ${props => props.$isFeatureProduct ? "0.8rem" : "10px"};
  ${props => props.$isRelatedProducts && "margin-top: 10px !important;margin-left: 10px !important;"}
  ${props => props.$isCategoriesSection && `bottom: 2.5em;font-family: ${props.theme.fonts.bold};font-size: .7em;`}
  background-color: ${props => props.$textNew ? "rgb(250, 189, 0)" : "#8f4f9a"};
  color: #ffffff;
  border-radius: 15px;
  padding: 5px 15px;
`;
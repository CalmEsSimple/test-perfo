import styled from "styled-components";

export const Sgv = styled.svg`
  padding-left: 5px;
`;

export const Ins = styled.ins`
  text-decoration: none;
  padding-right: 5px;
  background: transparent;
  color: #ffffff;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1.1em;
  font-weight: bold;
  font-weight: 800;
  margin-left: 5px;

  @media (max-width: 768px) {
    font-size: 1em;
    color: ${props => props.theme.colors.black};
    margin-left: 5px;
  }
  > span {
    font-family: ${props => props.theme.fonts.extraBold};
  }
`;

export const Span = styled.del`
  color: #999999;
`;

export const ItemLi = styled.li`
  margin: 2px 0;

`;

export const SpanText = styled.span`
    font-family: ${props => props.theme.fonts.medium};
  @media (max-width: 768px) {

  color: ${props => props.theme.colors.offBlack};
  }
`
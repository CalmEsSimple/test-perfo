import styled from "styled-components";

export const DivScore = styled.section`
  padding: 10px;
  text-align: center;
`;

export const TitleScore = styled.h2`
  color: #fabd00;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1.4em;
  font-weight: 100;
  letter-spacing: -0.5px;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

export const TextTitle = styled.h4`
  color: #000000;
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 1.2em;
  font-weight: bold;
  margin: 1rem 0 1rem 0;
`;

export const DivButton = styled.a`

  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.3px;
  fill: #fabd00;
  color: #fabd00;
  background-color: #ffffff;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 8px;
  padding: 0.7em 4em 0.8em 4em;

  &:hover {
    background-color: #fabd00;
    color: #ffffff;
    transition: 0.3s;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Button = styled.span`

`

export const Bold = styled.b`
  font-family: ${(props) => props.theme.fonts.extraBold};
`;

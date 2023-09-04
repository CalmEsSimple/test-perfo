import styled from "styled-components";

export const DivTerms = styled.section`
  padding: 0% 15% 0% 15%;

  @media (max-width: 768px) {
    padding: 0% 3% 0% 3%;

  }
`;
export const TitleTerms = styled.h2`
  color: rgba(25, 25, 28, 0.8);
  font-family: ${props => props.theme.fonts.extraBold};
  font-weight: 800;
  text-align: center;
  margin: 4rem 0px 4rem 0px;
  font-size: 2em;
`;

export const TitlesTerms = styled.div`
  margin-top: 2.2906835em;
  text-align: center;
  font-family: ${props => props.theme.fonts.regular};
  color: #191919;
  font-size: 1.618em;
  margin-bottom: 2rem;
`;

export const TextTerms = styled.div`
  text-align: left;
  font-family: "Muli";
  margin: 0 0 1.41575em;
  color: #7a7a7a;
  font-weight: 400;
  line-height: 1.618;
  text-rendering: optimizeLegibility;
  a {
    color: #fabd00;
  }
  ul, ol{
    margin: 0px 2rem 0px 2rem;
  }
`;

import styled from "styled-components";

export const DivTerms = styled.section`
  padding: 0% 3% 0% 3%;

  @media (max-width: 768px) {
    padding: 0% 3% 0% 3%;
  }
`;
export const TitleTerms = styled.h2`
  color: rgba(25, 25, 28, 0.8);
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1.8rem;
  text-align: center;
  margin: 4rem 0px 4rem 0px;
  line-height: 1.1rem;
  letter-spacing: 0.1rem;
`;

export const CardsPromotionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PromoBox = styled.div`
  box-shadow: 8px 10px 7px -7px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 8px 10px 7px -7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 8px 10px 7px -7px rgba(0, 0, 0, 0.3);
  border-radius: 1.5rem;
  padding: 1.2rem 1.2rem;
  margin: 1rem 0.3rem;
  width: calc(33.33% - 20px);
  background: #fbfbfb;

  &:nth-child(3n + 1) {
    margin-left: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem 0.5rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.7rem;
  }
`;

export const TitlesTerms = styled.div`
  margin-top: 2.2906835em;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.regular};
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
  ul,
  ol {
    margin: 0px 2rem 0px 2rem;
  }
`;

export const TitleTyCPromosCard = styled.h2<{ $isYellowTitle?: boolean }>`
  color: ${(props) =>
    props.$isYellowTitle
      ? props.theme.colors.yellowCalm
      : props.theme.colors.millionGray};
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0.7rem;

  @media ${(props) => props.theme.devices.mobile} {
    width: 90%;
    margin: 0 auto 1rem;
    font-size: 1rem;
    line-height: 1;
    text-align: center;
    padding: 0.8rem;
  }
`;

export const TextSmallCards = styled.p<{ $isYellowTitle?: boolean }>`
  font-family: "Muli";
  color: ${(props) =>
    props.$isYellowTitle
      ? props.theme.colors.yellowCalm
      : props.theme.colors.thamarBlack};
  text-align: left;
  margin: 0 0 1.41575em;
  font-weight: 400;
  font-size: 0.81rem;
  line-height: 1rem;
  text-rendering: optimizeLegibility;

  a {
    color: #fabd00;
  }
  ul,
  ol {
    margin: 0px 2rem 0px 2rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto 1rem;
    // font-size: 2rem;
    line-height: 1;
    text-align: center;
  }
`;

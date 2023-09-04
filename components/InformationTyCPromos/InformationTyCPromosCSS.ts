import styled from "styled-components";

export const DivTerms = styled.section`
  padding: 0% 3% 0% 3%;

  @media (max-width: 768px) {
    padding: 0% 3% 0% 3%;
  }
`;
export const TitleTerms = styled.h2`
  color: rgba(25, 25, 28, 0.8);
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-weight: 800;
  text-align: center;
  margin: 4rem 0px 4rem 0px;
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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-radius: 0.7rem;
  padding: 1rem 1rem;
  margin: 1rem 0.3rem;
  min-height: 12rem;
  width: calc(33.33% - 20px);

  &:nth-child(3n + 1) {
    margin-left: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 768px) {
    width: 100%;
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
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 1.3rem;
  font-weight: 300;
  margin: 1rem 0 0.5rem 0;
  @media ${(props) => props.theme.devices.mobile} {
    width: 90%;
    margin: 0 auto 1rem;
    font-size: 2rem;
    line-height: 1;
  }
`;

export const TextSmallCards = styled.p<{ $isYellowTitle?: boolean }>`
  color: ${(props) =>
    props.$isYellowTitle
      ? props.theme.colors.yellowCalm
      : props.theme.colors.millionGray};
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

  @media {
    margin: 0 auto 1rem;
    // font-size: 2rem;
    line-height: 1;
  }
`;

import styled from "styled-components";

export const DivColchonIdeal = styled.section`
  text-align: center;
`;

export const TitleColchonIdeal = styled.h2`
  color: #303030;
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 2.2em;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 21px;
  }
`;

export const TextTitle = styled.h3`
  color: #898989;
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 13px;
    padding-bottom: 2rem;
  }
`;

export const DivInformation = styled.section`
  max-width: 1024px;
  display: flex;
  margin: auto;
`;

export const DivHalf = styled.div`
  width: 50%;
  padding: 2rem 3rem 2rem 3rem;

  @media (max-width: 768px) {
    padding: 0 1rem 0 1rem;
  }
`;

export const DivImgText = styled.div`
  margin-bottom: 20px;
`;

export const Img = styled.img`
  border-radius: 18px 18px 18px 18px;
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

export const ImgRated = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

export const TitleImage = styled.h2`
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 2.2em;
  font-weight: 800;
  color: #191919cc;

  @media (max-width: 768px) {
    font-size: 21px;
  }
`;

export const DivTitleInformation = styled.div`
  text-align: center;
  background-color: #D9D9D925;
  border-radius: 12px 12px 12px 12px;
  padding: 30px;
  margin: auto;
  max-width: 1024px;

  @media (max-width: 768px) {
    margin: 2rem 0 2rem 0;
  }
`;

export const TitlesInformation = styled.h2`
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 2em;
  font-weight: 800;
  letter-spacing: -1.3px;
  color: #191919cc;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TextInformation = styled.h2`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 1.5em;
  font-weight: normal;
  letter-spacing: -0.9px;
  color: #191919cc;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ColorPrice = styled.h2`
  color: #fabd00;
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 2em;
  font-weight: normal;
  letter-spacing: -1.1px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  > span {
    font-family: ${(props) => props.theme.fonts.extraBold};
  }
`;

export const Price = styled.h2`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 2em;
  font-weight: normal;
  letter-spacing: -1.1px;
  color: #191919CC;

  @media (max-width: 768px) {
    font-size: 22px;
  }
  > span {
    font-family: ${(props) => props.theme.fonts.extraBold};
  }
`;

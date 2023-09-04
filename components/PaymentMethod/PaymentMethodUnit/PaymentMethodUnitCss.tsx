import styled from "styled-components";


export const DivUnitPayment = styled.div`
  width: 22.5%;
  padding: 10px;

  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const DivContentUnit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivImageUnit = styled.div`
  width: 25%;
  padding: 10px;
`;

export const Img = styled.img`
width: 100%;
height: auto;
max-width: 100%;
@media (max-width: 769px) {
  max-width: 60%;
  }
`

export const DivTextUnit = styled.div`
  width: 75%;
`;

export const TitleTextUnit = styled.h4`
  color: #303030;
  font-family: ${props => props.theme.fonts.medium};
  font-size: 18px;
  font-weight: 500;
  margin: 0px;

  @media (max-width: 769px) {
    font-size: 19px;
  }
`;

export const TextUnit = styled.h4`
  color: #999;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 13px;
  font-weight: 500;
  margin: 0px;

  @media (max-width: 769px) {
    font-size: 14px;
  }
`;

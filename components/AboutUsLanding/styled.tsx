import styled from "styled-components";

export const DivLanding = styled.section`
  background-color: transparent;
  background-image: linear-gradient(160deg, #fabd00 46%, #fab000 100%);
`;

export const DivTitle = styled.div`
  padding: 80px 140px 60px 140px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0px 0px 0px 0px;
  }
`;

export const Title = styled.h1`
  color: #fafafa;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 70px;
  line-height: 1em;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    font-size: 35px;
    margin-bottom: 40px;
    padding: 5px;
    font-weight: 800;
  }
`;

export const DivText = styled.div`
  padding: 0px 220px 75px 220px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0px 0px 0px 0px;
  }
`;

export const Text = styled.h2`
  color: #fafafa;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 32px;
  font-weight: 100;
  line-height: 1.1em;
  letter-spacing: 0.3px;
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 20px;
  }
`;

export const EmptyDiv = styled.div`
    height: 100px;
`

export const Bold = styled.b`
  font-family: ${props => props.theme.fonts.extraBold};
`
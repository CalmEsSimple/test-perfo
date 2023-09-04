import styled from "styled-components";

export const DivHotSale = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 10px 12px 10px 12px;
  }

  @media (min-width: 1200px) {
    max-width: 1100px;
  }
`;

export const DivIframe = styled.div`
  width: 60%;
  height: auto;

  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 1rem;
  }
`;

export const Video = styled.iframe`
  width: 100%;
  max-width: 100%;
  height: 340px;

  @media (max-width: 768px) {
    height: 270px;
  }

  @media (min-width: 1200px) {
    height: 430px;
  }
`;

export const DivTexto = styled.div`
  padding: 25px 70px 37px 70px;
  text-align: left;
  width: 40%;

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px 10px 10px 10px;
  }
`;

export const Title = styled.h3`
  color: rgb(48, 48, 48);
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 32px;
  line-height: 1em;
  font-weight: 800;
  letter-spacing: -0.4px;
  margin-bottom: 1rem;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 21px;
  }
`;

export const Text = styled.h3`
  color: #999999;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 21px;
  font-weight: 100;
  line-height: 1.2em;
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

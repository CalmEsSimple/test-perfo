import styled from "styled-components";

export const DivCyber = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  max-width: 1000px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 12px 10px 12px;
    margin-bottom: 1rem;
  }

  @media (min-width: 1200px) {
    max-width: 1100px;
  }
`;

export const DivImage = styled.div`
  width: 55%;
  height: auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

export const DivTexto = styled.div`
  padding: 25px 70px 37px 70px;
  text-align: left;
  width: 45%;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0px;
  }
`;

export const Title = styled.h3`
  color: #303030;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 32px;
  line-height: 1em;
  letter-spacing: -0.4px;
  font-weight: 800;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 23px;
    margin-top: 2rem;
  }
`;

export const Text = styled.h3`
  color: #999999;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 21px;
  font-weight: 100;
  line-height: 1.2em;
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
  margin: 0px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

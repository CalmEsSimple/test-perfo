import styled from "styled-components";

export const DivIndustry = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 20px 10px 20px
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
  padding: 0px 60px 37px 60px;
  text-align: left;
  width: 45%;

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px 10px 10px 10px;
  }
`;

export const Title = styled.h3`
  color: #303030;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 30px;
  line-height: 1em;
  font-weight: 800;
  letter-spacing: -0.4px;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;

export const Text = styled.p`
  color: #999999;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 19px;
  font-weight: 100;
  line-height: 1.2em;
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
  margin: 2rem 0;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 2rem 0 1rem 0;
  }
`;

export const DivButton = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.a`
  text-align: center;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 1em;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.3px;
  fill: #ffffff;
  color: #ffffff;
  background-color: #fabd00;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-radius: 16px;
  padding: 0.7em 1.6em 0.7em 1.6em;
  cursor: pointer;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 03% 9% 3% 9%;

  }
`;

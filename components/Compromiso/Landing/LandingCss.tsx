import styled from "styled-components";

export const DivLanding = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 4rem 0 4rem 0;
  background-color: #7f3d8b;

  @media (min-width: 1200px) {
    padding: 8rem 0 8rem 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #5700FF 0%, #E2982C 73.44%, #FFB800 100%);
  }
`;

export const DivImage = styled.article`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0% 5% 0% 0%;

  @media (max-width: 768px) {
    padding: 0px;
    width: 100%;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

export const Img = styled.img`
  height: auto;
  width: auto;
  max-width: 50%;
  min-width: 55%;
`;

export const DivText = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
`;

export const TitleText = styled.h1`
  color: #fafafa;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 2.5em;
  font-weight: 600;
  text-transform: none;
  text-decoration: none;
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 1.1em;
  }

  @media (min-width: 1200px) {
    font-size: 3em;
  }
`;

export const Description = styled.h2`
  color: #fdfdfd;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1.2em;
  font-weight: 300;
  text-transform: none;
  text-decoration: none;
  line-height: 1.2em;
  margin: 0em 3em 0em 0em;
  padding: 0px 0px 0px 0px;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.2em;
    letter-spacing: -0.2px;
    margin: 7px 0px 0px 0px;
    padding: 0% 5% 6% 5%;
  }
`;

export const DivButton = styled.div`
  display: flex;
  margin: 20px 20px 20px 0px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const DonateButton = styled.a`
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 1.4em;
  font-weight: 600;
  text-decoration: none;
  background-color: #ffb800;
  border-radius: 8px 8px 8px 8px;
  padding: 24px 55px 25px 55px;
  color: white;

  &:hover {
    background-color: #5700aa;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 5% 15% 5% 15%;
    background-color: #5700ff;
    border-radius: 7px 7px 7px 7px;

    &:hover {
      background-color: #5700ff;
    transition: 0.3s;
    }
  }
`;

export const ImgTecho = styled.img`
  @media (min-width: 1200px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

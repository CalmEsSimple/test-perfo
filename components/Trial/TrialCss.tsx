import styled from "styled-components";

export const DivTrials = styled.section`
  background-image: url("https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/1e2c9303-dc9d-4a6d-11b2-32e1e164a000/thumbnail");
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em 0 1em 0;
  transition: background-image 0.3s, border 0.3s, border-radius 0.3s,
  box-shadow 0.3s;
  filter: grayscale(25%);

  @media (min-width: 1200px) {
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    background-image: url("https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/d98a8ef0-52b8-4ed2-328b-89d0a608ba00/thumbnail");
    margin-top: 3%;
    margin-bottom: 5%;
    height: 40vh;
    transition: background-image 0.3s;
  }
`;

export const DivInfo = styled.div`
  padding: 20px 0;
  @media (min-width: 1200px) {
    margin: 0px 0px 0px 15rem;
  }
  @media (max-width: 1000px) {
    margin: 0px 0px 0px 2rem;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 90%;
  }
`;

export const Title = styled.h3`
  color: #ffffff;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 2.4em;
  font-weight: 100;
  line-height: 1.1em;
  letter-spacing: 0.2px;
  margin: 0;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Button = styled.a`
  display: inline-block;
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 1.4em;
  font-weight: 800;
  text-decoration: none;
  fill: #ffffff;
  color: #ffffff;
  box-sizing: content-box;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 5px;
  padding: 15px 35px 17px 35px;
  margin-top: 1rem;
  box-sizing: border-box;

  > span {
    font-family: ${(props) => props.theme.fonts.extraBold};
  }
  &:hover {
    background-color: #fabd00;
    transition: 0.3s;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    border-width: 1px 1px 1px 1px;
    padding: 9px 0px 9px 0px;
    text-align: center;
  }
`;

export const Bold = styled.b`
  font-family: ${(props) => props.theme.fonts.extraBold};
`;

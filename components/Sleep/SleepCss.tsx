import styled from "styled-components";
import sleepPerson from "../../../../assets/localm/img_cyber_2022.webp";

export const DivSleep = styled.section`
  background-image: url('https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8b1775e5-dc87-4d4e-87e7-7fd4f6c5f900/fit=crop');
  background-position: center right;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 42px;
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const DivTextButton = styled.div`
  padding: 10px;
  text-align: right;
  width: 45%;
  margin-top: 5%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 5rem;
  font-weight: 700;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 0.8em;
  letter-spacing: -2.3px;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    margin: auto;
    font-size: 3.2em;
    font-weight: 800;
  }
`;

export const Button = styled.a`
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.3px;
  fill: #ffffff;
  color: #ffffff;
  background-color: #803f8900;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-radius: 8px 8px 8px 8px;
  padding: 0.5em 1.5em 0.7em 1.6em;
  margin-top: 2rem;
  margin-bottom: 4rem;
  cursor: pointer;
  display: inline-block;
  
  &:hover {
    color: rgb(250 189 0);
    background-color: white;
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

export const DivEmpty = styled.div`
  width: 55%;

  @media (max-width: 768px) {
    width: 0%;
  }
`;
import styled from "styled-components";

export const BedDiv = styled.section`
  background-image: url(https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/db0fbf37-64a9-42dc-c7c8-bc29b0df1000/fit=scale-down);
  transition: all 0.5s;
  background-position: center center;
  min-height: 400px;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    min-height: 200px;
    background-image: url(https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/cdaf6cdb-48ef-4752-b813-63d88f389d00/fit=scale-down);
    transition: all 0.5s;
  }
`;

export const DivTextButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-family: ${props => props.theme.fonts.extraBold};
  font-weight: 800;
  font-size: 2em;
  margin-bottom: 0px;
`;

export const Button = styled.a`
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 20px;
  font-weight: 800;
  text-decoration: none;
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
  background-color: #5900ac;
  border-radius: 35px 35px 35px 35px;
  color: #ffffff;
  padding: 0.5em 1.5em 0.7em 1.6em;
  cursor: pointer;

  &:hover {
    color: rgb(250 189 0);
    background-color: white;
    transition: 0.3s;
  }
`;

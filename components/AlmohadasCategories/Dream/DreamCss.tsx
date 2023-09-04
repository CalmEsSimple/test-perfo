import styled from "styled-components";

export const DivDream = styled.section`
  padding: 0% 12.5% 0% 12.5%;
  text-align: center;

  @media (max-width: 850px) {
    padding: 0% 1% 0% 1%;
  }
`;

export const TitleDreams = styled.h2`
  color: #7a7a7a;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1.6em;
  font-weight: 200;
  text-align: center;
  margin-bottom: 2rem;

  > b {
    font-family: ${props => props.theme.fonts.extraBold};
  }
`;

export const DivInformation = styled.div`
  display: flex;


  @media (max-width: 850px) {

    flex-direction: row;
    flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  }
`;

export const InfomationUnit = styled.div`
  box-sizing: border-box;
  width: 25%;
  background-color: #f8f8f8;
  margin: 0em 0.5em 0em 0.5em;
  border-radius: 16px 16px 16px 16px;
  padding: 10px;

  @media (max-width: 850px) {
    max-width: 47%;
    width: 50%;
    margin: 5px;
  }
`;

export const TitleInformation = styled.h3`
  color: #303030;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1.2em;
  font-weight: 200;
  margin: 1em 0em 1em 0em;
  > b {
    font-family: ${props => props.theme.fonts.extraBold};
  }
`;

export const DivImgInformation = styled.div`
  margin: 0% 10% 0% 10%;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  padding: 1em 0em 1em 0em;
`;

export const DivTextInformation = styled.div`
  padding: 1em 0em 1em 0em;
  border-style: solid;
  border-width: 1px 0px 0px 0px;
  border-color: #c4c4c450;
`;

export const Text = styled.h4`
  color: #303030;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1em;
  font-weight: 200;
  > b {
    font-family: ${props => props.theme.fonts.extraBold};
  }
`;

export const DivButton = styled.a`
  display: block;
  margin: 05% 5% 05% 5%;
  box-sizing: border-box;
  fill: #fabd00;
  color: #fabd00;
  background-color: #f8f8f8;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 8px 8px 8px 8px;
  padding: 12px 24px;
  text-decoration: none;

  &:hover {
    color: #f8f8f8;
    background-color: #fabd00;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

export const Button = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 15px;
  font-weight: 800;
  text-transform: none;
  text-decoration: none;
  border-radius: 8px 8px 8px 8px;
`;

import styled from "styled-components";

export const DivHelp = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const DivDonate = styled.div``;

export const TitleDonate = styled.h2`
  color: #303030;
  font-family: ${props => props.theme.fonts.extraBold};
  margin-bottom: 2px;
  font-weight: 800;
  font-size: 2em;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`

export const TextDonate = styled.h2`
  color: #303030;
  font-family: ${props => props.theme.fonts.medium};
  font-size: 1.3em;
  font-weight: 400;
  line-height: 1.3em;
  margin: 2rem 0 1rem 0;
  letter-spacing: -0.3px;
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

export const TextCommitment = styled.h2`
  font-family: ${props => props.theme.fonts.bold};
  color: #303030;
  font-size: 1.3em;
  font-weight: 400;
  line-height: 1.3em;
  margin: 2rem 0 1rem 0;
  letter-spacing: -0.3px;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`

export const DivCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const Card = styled.div`
  margin: 10px 0px 10px 0px;
  flex-basis: 45%;
  border-radius: 10px;
  background: linear-gradient(262.69deg, #ffb800 -9.15%, #5700ff 123.01%);
  @media (max-width: 900px) {
    flex-basis: 90%;
  }
`;

export const DivContainerCard = styled.div`
  padding: 10px;
  max-width: 1140px;
  display: flex;
  min-height: 190px;
  align-items: center;
`;

export const DivImageCard = styled.div`
  width: 38%;
  margin: auto;
`;

export const ImageCard = styled.img`
  width: 115px;
  height: 17vh;
  text-align: center;
`;

export const DivTextCard = styled.div`
  width: 62%;
  padding: 10px;
  text-align: left;
`;

export const TitleCard = styled.h2`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 2.2em;
  font-weight: 600;
  letter-spacing: 0.5px;
  -webkit-text-stroke: 0.4px white;
  color: transparent;
  margin: 0px;
  margin-bottom: 10px;
`;

export const TextCard = styled.h2`
  color: #fafafa;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 0.85em;
  font-weight: 100;
  line-height: 1.3em;
  letter-spacing: 0px;
  margin: 0px;
  b {
     font-family: ${props => props.theme.fonts.extraBold};
  }
`;
export const WordDonated = styled.p`
font-family: ${props => props.theme.fonts.extraBold};
margin-top: 8px;
font-size: 15px;
`
export const DivCardsViolet = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`

export const CardViolet = styled.div`
  margin: 10px 0px 10px 0px;
  flex-basis: 45%;
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  background: linear-gradient(to bottom right, #5700AA, #7A00ED);
  @media (max-width: 900px) {
    flex-basis: 90%;
  }
`;
export const DivContainerCardViolet = styled.div`
  padding: 10px;
  max-width: 1140px;
  display: flex;
  height: 150px;
  align-items: center;
`;

export const DivImageCardViolet = styled.div`
  width: 38%;
  margin: auto;
`;

export const ImageCardViolet = styled.img`
    width: 151px;
    height: 15vh;
    vertical-align: middle;
    display: inline-block;
    box-shadow: none;
`;

export const DivTextCardViolet = styled.div`
  width: 62%;
  padding: 10px;
  text-align: left;
`;

export const TitleCardViolet = styled.h2`
color: #FFB800;
    font-family: ${props => props.theme.fonts.extraBold};
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    margin-bottom: 15px;
`;

export const TextCardViolet = styled.h2`
  color: #fafafa;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 0.95em;
  font-weight: 100;
  line-height: 1.3em;
  letter-spacing: 0px;
  margin: 0px;
    b {
      font-family: ${props => props.theme.fonts.extraBold};
     }
`;
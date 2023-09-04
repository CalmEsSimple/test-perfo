import Image from "next/image";
import styled from "styled-components";

export const DivDonate = styled.section<{$withBorder?: boolean}>`
  background: linear-gradient(263.41deg, #5700ff -0.22%, #ffb800 82.31%);
  padding: 45px 5px 45px 0px;
  display: flex;
  margin: 15px 0px 15px 0px;
  ${props => props.$withBorder && "border-radius: 20px;"}
  @media (max-width: 768px) {
    background: linear-gradient(45deg, #5700FF -0.22%, #FFB800 82.31%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const DivImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    justify-content: flex-end;
    margin-right: 6rem;
  }
`;

export const Img = styled(Image)`
  max-width: 100%;
  height: auto;
  width: 50%;
  padding-right: 1rem;
    
  @media (min-width: 1400px) {
    max-width: 33%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DivText = styled.div`
  width: 50%;
  text-align: left;

  @media (max-width: 768px) {
text-align:center;
width: 100%;
  }
`;

export const Title = styled.h1`
  color: #fafafa;
  font-family: ${props => props.theme.fonts.bold};
  font-size: 2.6em;
  font-weight: 600;
  text-transform: none;
  text-decoration: none;
  line-height: 1;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 25px;
line-height: 1em;
margin: 2rem 0pc 2rem 0px;
  }
`;

export const Text = styled.h2`
  color: #fdfdfd;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1.3em;
  font-weight: 300;
  text-transform: none;
  text-decoration: none;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Button = styled.a`
color: #FFFF;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 1.2em;
  font-weight: 600;
  text-decoration: none;
  background-color: #ffb800;
  margin-top: 1rem;
  border-radius: 8px;
  padding: 12px 35px 12px 35px; 
   
  &:hover {
    color: white;
    background-color: #5700aa;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 3% 9% 3% 9%;
    font-weight: 800;
  }
`;

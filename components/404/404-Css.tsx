import styled from "styled-components";


export const ContainerNotFound = styled.section`
 height: 100%;

 `;
export const ContainerImg = styled.div`
    padding-top: 5rem;
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: center;

`;
export const ContainerTitleButtom = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`;

export const TitleNotFound = styled.h2<{  $isYellowTitle?: boolean, $isMobile?: boolean }>`
  color: ${(props) => props.$isYellowTitle ? props.theme.colors.yellowCalm : props.theme.colors.millionGray};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 1.7em;
  text-align: center;
  margin: 1rem 0 0.5rem 0;
  @media ${props => props.theme.devices.mobile} {
    width: 90%;
    margin: 0 auto 1rem;
    font-size: 1.3rem;
    line-height: 1;
  }
`;


export const DivButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  margin-bottom:6rem;
@media (max-width: 768px) {
  display: flex;
  justify-content: center;
}
;
`
export const Button = styled.a`
text-align: center;
font-family: ${props => props.theme.fonts.extraBold};
font-size: 1.1em;
font-weight: 800;
text-decoration: none;
letter-spacing: 0.3px;
fill: #ffffff;
color: #ffffff;
background-color: #fabd00;
border-style: solid;
border-width: 2px 2px 2px 2px;
border-radius: 5px;
padding: 0.5em 1.6em 0.7em 1.6em;
cursor: pointer;
display: inline-block;
@media (max-width: 768px) {
  font-size: 19px;
  padding: 03% 9% 3% 9%;
}
;
`
export const ContainerContact = styled.div`
 width: 100%;
 background-color: ${props => props.theme.colors.lynxWhite};
 min-height: 20vh;
 display: flex;
  margin-bottom: -1.5rem;
 padding-bottom: 1.5rem;
 justify-content: center;
 align-items: center;
 gap: 5%;
   @media ${props => props.theme.devices.mobile} {
    display: flex;
    flex-direction: column;
  }
`

export const ContainerBoxContact = styled.div`
padding-top: 2rem;
 display: flex;
 width: 15rem;
 flex-direction: column;
 align-items: center;
`
export const ImgContact = styled.img`
width: 50px;
height: 50px;

`
export const LinkContact = styled.a`
text-decoration: none;
font-family: ${props => props.theme.fonts.regular};
font-size: 1.2rem;
color: ${props => props.theme.colors.millionGray}
`
import { styled } from "styled-components";


export const ImgSection = styled.section`
    background-image: url(https://calmessimple.com.ar/wp-content/uploads/2021/09/2700x900_HOme9del9_Desktop.webp);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 70vh;
    @media ${props => props.theme.devices.biggerMobile}{
      max-height: 50vh;
   }
    @media ${props => props.theme.devices.mobile}{
      max-height: 35vh;
   }
`
export const TitlePickUpContainer = styled.div`
max-width: 100vw;
height: 70vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media ${props => props.theme.devices.biggerMobile}{
     height: 45vh;
   }
@media ${props => props.theme.devices.mobile}{
      height: 35vh;
}
`
export const TitlePickUp = styled.h1`
font-size: 4rem;
letter-spacing: .5px;
 -webkit-text-stroke: 1px #fabd00;
 text-shadow: 0 0 25px #fabd00!important;
 color: transparent;
font-family: ${props => props.theme.fonts.extraBold};
@media ${props => props.theme.devices.biggerMobile}{
      font-size: 4rem;
   }
@media ${props => props.theme.devices.mobile}{
      font-size: 2rem;
   }

`
export const PhraseWithdrawal = styled.p`
color: #fafafa;
padding-top: 0.8rem;
font-family: ${props => props.theme.fonts.medium};
    font-size: 1.2em;
    font-weight: 400;
    text-transform: none;
    font-style: normal;
    text-decoration: none;
    max-width: 30vw;
    text-align: center;
    @media ${props => props.theme.devices.biggerMobile}{
      font-size: 1.3rem;
      max-width: 40vw;
   }
    @media ${props => props.theme.devices.mobile}{
      font-size: 1rem;
      max-width: 90vw;
   }
`
export const TextComponentContainer = styled.div`
 min-height: 40vh;
 padding: 1rem;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`
export const TitleTextComponent = styled.h1`
    color: #303030d6;
    max-width: 40vw;
    text-align: center;
    font-size: 1.3rem;
    font-family: ${props => props.theme.fonts.extraBold};
    @media ${props => props.theme.devices.biggerMobile}{
      font-size: 1.5rem;
      max-width: 50vw;
   }
    @media ${props => props.theme.devices.mobile}{
      font-size: 1rem;
      max-width: 70vw;
   }
`
export const Text = styled.p`
    padding-top: 1rem;
   color: #303030d6;
   text-align: center   ;
    font-family: ${props => props.theme.fonts.medium};
    font-size: 20px;
    font-weight: 100;
    font-style: normal;
    line-height: 1.2em;
    max-width: 40vw;
    @media ${props => props.theme.devices.biggerMobile}{
      font-size: 1rem;
      max-width: 50vw;
   }
    @media ${props => props.theme.devices.mobile}{
      font-size: .9rem;
      max-width: 70vw;
   }
`

export const Ask = styled.h2`
    color: #303030;
    max-height: 20vh;
     font-family: ${props => props.theme.fonts.light};
     font-size: 2rem;
     padding-top: 4rem;
     @media ${props => props.theme.devices.mobile}{
      padding-top: 3rem;
      font-size: 1rem;
   }
`

export const ContainerGuiaVehiculo = styled.div`
min-width: 100vw;
max-height: 20vh;
display: flex;
justify-content: center ;
background-color: ${props => props.theme.colors.lynxWhite};
`
export const TitleGuiaVehiculo = styled.h2`
font-family: ${props => props.theme.fonts.light};
font-size: 2em;
margin-top: 4rem;
@media ${props => props.theme.devices.biggerMobile}{
      font-size: 1.5rem;
   }
    @media ${props => props.theme.devices.mobile}{
      font-size: 1rem;
   }

`
export const ContainerImgs = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
export const ImgVehiculos = styled.img`
  max-width: 100vw;
  max-height: 100vh;
  padding: 10px;
  overflow-clip-margin: content-box;
  overflow: clip;
  cursor: pointer;
  @media ${props => props.theme.devices.biggerMobile}{
    max-width: 60vw;
   max-height: 60vh;
   }
    @media ${props => props.theme.devices.mobile}{
      max-width: 50vw;
     max-height: 50vh;
   }
`;

export const FullscreenImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 100vw;
  max-height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

`;

export const FullscreenImgVehiculos = styled.img`
  max-width: 95%;
  max-height: 95%;
  
`;



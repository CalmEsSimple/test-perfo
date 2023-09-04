
import styled from "styled-components";

export const DivHelp = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media ${props =>  props.theme.devices.biggerMobile} {
    max-width: 90%;
  }
`;
export const DivCards = styled.section <{ carousel?: boolean}>`
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  justify-content: space-evenly;
  @media ${(props) => (props.carousel ? "initial" : props.theme.devices.mobile)} {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
  export const ContainerCarrousel = styled.div`
  max-width: 100vw;
  @media ${props=> props.theme.devices.mobile}{
    max-width: 90vw;
  }
  `

export const Card = styled.div <{  background?: string, carousel?:boolean}>`
  margin: 10px 0px 10px 0px;
  flex-basis: 45%;
  border-radius: 10px;
  background: ${props =>
  props.background === "pickUp" || !props.background
    ?  "linear-gradient(to bottom right, #5700AA, #7A00ED)"
    :  "linear-gradient(262.69deg, #ffb800 -9.15%, #5700ff 123.01%)"};
  @media ${props=> props.theme.devices.biggerMobile}{
    max-height: ${props => props.carousel && "400px"};
    border-radius: ${props => props.carousel && "0"};
  }
  @media ${props=> props.theme.devices.mobile}{
    max-height: ${props => props.carousel && "200px"};
  }
`
export const DivImageCard = styled.div <{ carousel?: boolean }>`
  max-width: 40%;
  margin: auto;
  @media ${props=> props.theme.devices.biggerMobile}{
    max-width: ${props => props.carousel && "60%"};
    margin: ${props => props.carousel && "0"};
    position:  ${props => props.carousel && "absolute"};
    opacity:  ${props => props.carousel && ".2"};
    transition: ${props => props.carousel && "all 3s ease;"};
  }

`;

export const DivContainerCard = styled.div<{ carousel?: boolean }>`
  padding: 10px;
  max-width: 1140px;
  display: flex;
  min-height: 190px;
  align-items: center;
  @media ${props => props.theme.devices.biggerMobile} {
    height: ${props => props.carousel && "400px"};
    position: ${props => props.carousel && "relative"};
    max-width: ${props => props.carousel && "800px"};
    justify-content: ${props => props.carousel && "center"};
    overflow: ${props => props.carousel && "hidden"}; 
    &:hover {
      ${DivImageCard} {
        transform: ${props => props.carousel && "scale(0.9)"};
        transition: ${props => props.carousel && "all 3s ease"};
      }
    }
  }
  @media ${props=> props.theme.devices.mobile}{
    height: ${props => props.carousel && "200px"};
    max-width: ${props => props.carousel && "100%"};
  }
`;
export const ImageCard = styled.img <{ carousel?: boolean }>`
  width: 115px;
  height: 17vh;
  text-align: center;
  @media ${props => props.theme.devices.biggerMobile}{
    width: 90px;
    height: 12vh;
    height: ${props => props.carousel && "460px"};
  }
  @media ${props => props.theme.devices.mobile}{
    height: ${props => props.carousel && "300px"};    
  }
`;
export const DivTextCard = styled.div <{ carousel?: boolean }>`
  max-width: 60%;
  padding: 10px;
  text-align: left;
  @media ${props => props.theme.devices.biggerMobile}{
   position: ${props => props.carousel && "relative"} ;
   max-width: ${props => props.carousel && "40%"};
   text-align: ${props => props.carousel && "center"};
  }
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



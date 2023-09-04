import {
  DivLanding,
  DivImage,
  DivText,
  TitleText,
  Description,
  DonateButton,
  Img,
  DivButton,
  ImgTecho,
} from "./LandingCss";
import { useWidth } from "@/hooks/useWidth";

const Landing = () => {
  
  const width = useWidth()
  const breakpoint = 768;

  return (
    <DivLanding>
      <DivImage>
        {width > breakpoint ? (
          <Img
            src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a353d3ad-9c02-4662-34d0-e3cb1b164400/fit=cover"
            alt="compromiso descansados"
          />
        ) : (
          <Img
            src="https://calmessimple.com.ar/wp-content/uploads/2021/09/LogoHSSolidariX-10_Mobile-03.svg"
            alt="compromiso descansados"
          ></Img>
        )}
      </DivImage>
      <DivText>
        <TitleText>
          Doná tu ex colchón <br /> y le buscamos un <br /> nuevo hogar.
        </TitleText>
        <Description>Ahora no 1, si no 2 van a descansar mejor.</Description>
        <DivButton>
          <DonateButton href="#pasos" role="button">
            ¡Quiero Donar!
          </DonateButton>
        </DivButton>
        <ImgTecho
          width="130px"
          src="https://calmessimple.com.ar/wp-content/uploads/2021/04/Techo-Calm.svg"
        ></ImgTecho>
      </DivText>
    </DivLanding>
  );
};

export default Landing;

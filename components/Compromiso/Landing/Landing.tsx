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
  DivDonate,TextDonate, TitleDonate, TextCommitment, ContainerCompromiso, ContainerText
} from "./LandingCss";
import { useWidth } from "@/hooks/useWidth";

const Landing = () => {
  
  const width = useWidth()
  const breakpoint = 768;

  return (
  <div>

    <DivLanding>
      <DivImage>
        {width > breakpoint ? (
          <Img
            src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a353d3ad-9c02-4662-34d0-e3cb1b164400/fit=crop"
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
    <ContainerCompromiso>
      <ContainerText>
    <DivDonate id="pasos">
        {width > breakpoint ? (
          <TextDonate>
            Tenemos una propuesta para vos: el colchón que ya no vas a usar,{" "}
            <br />
            tu ex colchón, lo podés donar y nosotrxs nos encargamos de buscarle
            <br />
            un nuevo hogar para que alguien más pueda descansar mejor.
          </TextDonate>
        ) : (
          <TextDonate>
            Tenemos una propuesta para vos: el colchón que ya no vas a usar, tu
            ex colchón, lo podés donar y nosotrxs nos encargamos de buscarle un
            nuevo hogar para que alguien más pueda descansar mejor.
          </TextDonate>
        )}
        <TextCommitment>#CompromisoDescansadxs ✨</TextCommitment>
      </DivDonate>
      <TitleDonate>¿Cómo hago para ayudar?</TitleDonate>
      </ContainerText>
    </ContainerCompromiso>
  </div>
  );
};

export default Landing;

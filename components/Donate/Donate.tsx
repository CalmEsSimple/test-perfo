import {
  DivDonate,
  DivImage,
  Img,
  DivText,
  Title,
  Text,
  Button,
} from "./DonateCss";

const Donate = ({withBorder}: {withBorder?: boolean}) => {
  return (
    <DivDonate $withBorder={withBorder}>
      <DivImage>
        <Img
          src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a353d3ad-9c02-4662-34d0-e3cb1b164400/thumbnail"
          data-src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a353d3ad-9c02-4662-34d0-e3cb1b164400/thumbnail"
          alt="compromiso solidario"
          fill={true}
        ></Img>
      </DivImage>
      <DivText>
        <Title>
          Doná tu ex colchón <br />
          y le buscamos un <br />
          nuevo hogar.
        </Title>
        <Text>Ahora no 1, sino 2 van a descansar mejor</Text>
        <Button title="Donar colchón" aria-label="Donar colchón" href="https://calmessimple.com.ar/compromiso-descansados/">¡Quiero Donar!</Button>
      </DivText>
    </DivDonate>
  );
};

export default Donate;

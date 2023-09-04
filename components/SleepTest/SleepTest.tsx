import {
  DivSleepTest,
  DivTexto,
  Img,
  Title,
  Text,
  DivImage,
  ReserveButton,
  Bold,
  SeeMoreButton,
  DivButtons,
} from "./styled";

const SleepTest = () => {
  return (
    <DivSleepTest>
      <DivTexto>
        <Title>
          Venite a dormir <Bold>la siesta</Bold>.
        </Title>
        <Text>
          Probá nuestros productos durante 45 minutos de siesta en nuestro local
          de Santos Dumont 3507. Te damos todo lo que necesitás para un buen
          descanso.
        </Text>
        <DivButtons>
          <ReserveButton href="https://calendar.app.google/hfDL1WPQqjNdYtWd7">
            Reservar
          </ReserveButton>
          <SeeMoreButton href="https://calmessimple.com.ar/siestario-calm/">
            Ver más
          </SeeMoreButton>
        </DivButtons>
      </DivTexto>
      <DivImage>
        <Img
          src="https://calmessimple.com.ar/wp-content/uploads/2023/08/IMG_9610-1.webp"
          alt="Prueba Colchon"
        ></Img>
      </DivImage>
    </DivSleepTest>
  );
};

export default SleepTest;

import { DivLanding, Title, Text, DivTitle, DivText, EmptyDiv, Bold } from "./styled";

const AboutUsLanding = () => {
  return (
    <DivLanding>
        <EmptyDiv/>
      <DivTitle>
        <Title>
          Somos un equipo <br /> inspirado <br /> por hacer las cosas <br /> simples.
        </Title>
      </DivTitle>
      <DivText>
        <Text>
          <Bold>
            Redefinimos la experiencia de las personas a través de lo simple.{" "}
            <br />
          </Bold>
          Ofrecemos a cada cliente productos de la más alta calidad, <br />
          precios honestos y 30 noches de prueba en casa.
        </Text>
      </DivText>
      <EmptyDiv/>
    </DivLanding>
  );
};

export default AboutUsLanding;

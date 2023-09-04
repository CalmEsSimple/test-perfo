import {
  DivIndustry,
  DivTexto,
  Img,
  Title,
  Text,
  DivImage,
  Button,
  DivButton,
} from "./IndustryCss";

const Industry = () => {
  return (
    <DivIndustry>
      <DivImage>
        <Img
          src="https://calmessimple.com.ar/wp-content/uploads/2021/10/ImagenHistoria-1024x702.jpg"
          alt="el equipo de calm"
        ></Img>
      </DivImage>
      <DivTexto>
        <Title>Despertando una industria dormida</Title>
        <Text>
          Calm nace como un proyecto de dos amigos que encontraron en la
          experiencia de compra de colchones la oportunidad de despertar una
          industria dormida. Hoy somos un equipo de 40 personas que se agranda
          mes a mes y llegamos a más de 300 ciudades de todo el país.
        </Text>
        <DivButton>
        <Button href={process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + "/nuestra-historia"}>¡Conocé nuestra historia! </Button>
        </DivButton>
      </DivTexto>
    </DivIndustry>
  );
};

export default Industry;
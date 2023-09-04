import {
  DivWellbeing,
  DivTexto,
  Img,
  Title,
  Text,
  DivImage,
  Button,
  DivButton,
} from "./WellbeingCss";

const Wellbeing = () => {
  return (
    <DivWellbeing>
      <DivTexto>
        <Title> Queremos mejorar el bienestar de las personas, en serio.</Title>
        <Text>
          Nos comprometemos al 100% con nuestra misión: mejorar notablemente el
          bienestar de las personas a través de lo simple. Trabajamos con
          organizaciones de impacto social para llegar a más personas y aportar
          desde nuestro lugar.
        </Text>
        <DivButton>
          <Button href={process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + "/compromiso-descansados"}>
            ¡Quiero saber más!
          </Button>
        </DivButton>
      </DivTexto>
      <DivImage>
        <Img
          src="https://calmessimple.com.ar/wp-content/uploads/2021/10/OficinaCalm.jpg"
          alt="la ofi de calm"
        ></Img>
      </DivImage>
    </DivWellbeing>
  );
};

export default Wellbeing;

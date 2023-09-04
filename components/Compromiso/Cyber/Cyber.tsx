import { DivCyber, DivTexto, Img, Title, Text, DivImage } from "./CyberCss";

const Cyber = () => {
  return (
    <DivCyber>
      <DivImage>
        <Img
          src="https://calmessimple.com.ar/wp-content/uploads/2021/11/PHOTO-2021-11-08-18-26-59-1024x768.jpg"
          alt="colchones donados"
        ></Img>
      </DivImage>
      <DivTexto>
        <Title> Cyber Compromiso Descansadxs ✨</Title>
        <Text>
          Durante Cyber Monday 2021 ampliamos nuestra propuesta para llegar a
          más zonas del país.
          <br />
          <br />
          Se donaron 282 colchones, 282 familias recibieron un colchón y
          mejoraron su descanso.
        </Text>
      </DivTexto>
    </DivCyber>
  );
};

export default Cyber;

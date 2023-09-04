import {
  DivExperience,
  DivTexto,
  Img,
  Title,
  Text,
  DivBackground,
  DivImage,
  Bold
} from "./ExperienceCss";
import Empathy from '../Empathy/Empathy'

const Experience = () => {
  return (
    <DivBackground>
      <DivExperience>
        <DivImage>
          <Img src='https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8c38695d-2973-46f8-a677-c773f73dc800/fit=cover' alt="experienceImage" />
        </DivImage>
        <DivTexto>
          <Title>
            nuestra receta para una <br /> <Bold>experiencia inolvidable</Bold>
          </Title>
          <Text>
            Acercate al localm y abrí la puerta hacia tu <Bold>descanso soñado</Bold>,
            vení en bici o con tu mascota. Vas a ser recibido por{" "}
            <Bold>sommeliers de colchones</Bold> que te van a ayudar a encontrar tu
            descanso ideal.
          </Text>
        </DivTexto>
      </DivExperience>
      <Empathy />
    </DivBackground>
  );
};

export default Experience;

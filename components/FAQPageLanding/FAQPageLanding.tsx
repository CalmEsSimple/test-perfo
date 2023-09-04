import { DivLanding, DivEmpty, Title, DivText, Text } from "./styled";

const FAQPageLanding = () => {
  return (
    <DivLanding>
      <DivEmpty />
      <Title>Preguntas frecuentes</Title>
      <DivText>
        <Text>
          Estas son las preguntas que más nos hacen, si tenes otra escribinos al
          chat. Te contestamos al toque.
        </Text>
        <DivEmpty />
      </DivText>
    </DivLanding>
  );
};

export default FAQPageLanding;

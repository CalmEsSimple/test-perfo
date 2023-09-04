import { DivSleep, DivContainer, DivTextButton, DivEmpty, Title, Button } from "./SleepCss";

const Sleep = () => {
  return (
    <DivSleep>
      <DivContainer>
        <DivTextButton>
          <Title>¿vamos a <br /> dormir?</Title>
          <Button title="Ir a link colchón" aria-label="Ir a link colchón" href={"https://calmessimple.com.ar/producto/colchon-calm/"}>ver colchón</Button>
        </DivTextButton>
        <DivEmpty></DivEmpty>
      </DivContainer>
    </DivSleep>
  );
};

export default Sleep;

import {
  Title,
  Iframe,
  DivUnboxing,
  Subtitle,
} from "./UnboxingCss";

const Unboxing = ({isCombo}: {isCombo?: boolean}) => {
  return (
    <DivUnboxing>
        <Title $isCombo={isCombo}>unboxing calm</Title>
        {isCombo && <Subtitle>Compartí el tuyo en redes sociales usando #unboxingcalm</Subtitle>}
        <Iframe
          src="https://www.youtube-nocookie.com/embed/arxKSRvmk10"
          title="Colchón Calm - Unboxing del colchón de tus sueños"
        ></Iframe>
    </DivUnboxing>
  );
};

export default Unboxing;

import {
  DivCancel,
  TitleCancel,
  ColorText,
  TextCancel,
  DivImagen,
  Text,
} from "./BodyCancelCss";

const BodyCancel = () => {
  return (
    <DivCancel>
      <DivImagen>
        <img
          width="100"
          height="100"
          src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/2ad809c2-f0bf-4c19-1ff4-eaad569fdf00/thumbnail"
          data-src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/2ad809c2-f0bf-4c19-1ff4-eaad569fdf00/thumbnail"
          alt="Icono de Caja con colchón"
        ></img>
      </DivImagen>
      <TextCancel>
        <TitleCancel>
          Para solicitar una cancelación contáctanos por:
        </TitleCancel>
        <Text>
          <ColorText>Teléfono o WhatsApp:</ColorText> +5491151714371
        </Text>
        <Text>
          <ColorText>Mail:</ColorText> hola@calmessimple.com.ar
        </Text>
      </TextCancel>
    </DivCancel>
  );
};

export default BodyCancel;

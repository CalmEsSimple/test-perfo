import { DivLanding, DivTitleLanding, TitleLanding, TextTitle } from "./styled";

const CancelPurchaseLanding = () => {
  return (
    <DivLanding>
      <DivTitleLanding>
        <TitleLanding>Arrepentimiento de compra</TitleLanding>
        <TextTitle>
          Tenes 30 días corridos para cancelar tu compra a partir del día de la
          entrega del producto.
        </TextTitle>
      </DivTitleLanding>
    </DivLanding>
  );
};

export default CancelPurchaseLanding;

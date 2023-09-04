import {
  DivUnitPayment,
  DivContentUnit,
  DivImageUnit,
  DivTextUnit,
  TitleTextUnit,
  TextUnit,
  Img,
} from "./PaymentMethodUnitCss";

interface IProps {
  linkImg: string
  method: string
  description: string
}

const PaymentMethodUnit = ({ linkImg, method, description }: IProps) => {

  return (
    <DivUnitPayment>
      <DivContentUnit>
        <DivImageUnit>
          <Img
            src={linkImg}
            alt="payment method"
          />
        </DivImageUnit>
        <DivTextUnit>
          <TitleTextUnit>{method}</TitleTextUnit>
          <TextUnit>{description}</TextUnit>
        </DivTextUnit>
      </DivContentUnit>
    </DivUnitPayment>
  );
};

export default PaymentMethodUnit;

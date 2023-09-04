import {
  DivWithdrawals,
  TitleWithdrawals,
  TextWithdrawals,
  DivWithdrawalsText,
  Bold
} from "./WithdrawalsCss";
import { useWidth } from "@/hooks/useWidth";

const Withdrawals = () => {
  const width = useWidth();
  const breakpoint = 768;

  return (
      <DivWithdrawals>
        <DivWithdrawalsText>
        <TitleWithdrawals>Modalidad de retiros</TitleWithdrawals>
        <TextWithdrawals>
          <Bold>
            La acción sólo aplica a pedidos en zonas determinadas de CABA y GBA
          </Bold>
          . <br />
          Retiramos el colchón que ya no vas a usar, tu ex colchón, en el
          momento que entregamos tu Calm. Vamos a estar comunicandonos con vos
          apenas recibamos tu pedido para coordinar el paso a paso. <br />
          <Bold> Es importante que el colchón esté en buen estado </Bold>y, en lo
          posible, envuelto para que llegue sano a su nuevo hogar. 💛
        </TextWithdrawals>
        </DivWithdrawalsText>

        {width <= breakpoint && (
          <DivWithdrawalsText>
            <TitleWithdrawals>Cyber Monday</TitleWithdrawals>
            <TextWithdrawals>
              Durante el evento incrementamos el volumen de envíos y 
              <Bold> puede ser que no tengamos </Bold>
              espacio para retirar tu ex colchón al mismo tiempo que entregamos el nuevo. Si esto pasa no te preocupes, después de la entrega 
              <Bold> vamos a comunicarnos con vos </Bold>
              para coordinar otro día para el retiro de la donación.
            </TextWithdrawals>
          </DivWithdrawalsText>
        )}
      </DivWithdrawals>

  );
};

export default Withdrawals;

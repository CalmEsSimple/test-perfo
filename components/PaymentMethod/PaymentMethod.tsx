import ComponentModal from "./Modal/Modal";
import { DivPayment, DivUnits } from "./PaymentMethodCss";
import PaymentMethodUnit from "./PaymentMethodUnit/PaymentMethodUnit";
import Carousel from "./Carrousel/Carrousel";
import { deviceSizes } from "@/utils/Theme";
import { useWidth } from "@/hooks/useWidth";

const PaymentMethod = () => {
  const methods = [
    {
      link: "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/edea205b-efee-4b07-05e9-c407f358a300/fit=cover",
      method: "Tarjeta de credito",
      description: "Hasta 12 cuotas sin interés",
    },
    {
      link: "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/e34b550f-63f6-436b-9353-80e5c5954e00/fit=cover",
      method: "Tarjeta de débito",
      description: "Hasta 20% Off en un pago",
    },
    {
      link: "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/e34b550f-63f6-436b-9353-80e5c5954e00/fit=cover",
      method: "Cuotas sin tarjeta",
      description: "Pagá con Wibond",
    },
    {
      link: "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/333c8718-3b04-4a34-b83e-91b8afac3300/fit=cover",
      method: "Transferencia",
      description: "Hasta 20% Off en un pago",
    },
  ];

  return (
    <DivPayment>
      <DivUnits>
        {useWidth() > deviceSizes.mobile ? (
          <>
            {methods.map((item) => (
              <PaymentMethodUnit
                key={item.method}
                linkImg={item.link}
                method={item.method}
                description={item.description}
              />
            ))}
            <ComponentModal/>
          </>
        ) : (
          <Carousel
            items={methods}
          />
        )}
      </DivUnits>
    </DivPayment>
  );
};

export default PaymentMethod;

import QuestionsJson from "./FrequentQuestions.json";
import Accordion from "../Accordion/Accordion";
import {
  DivContainer,
  DivAccordion,
  Title,
  DivContainerAccordion,
  DivTitleAccordion,
  DivTextAccordion,
  TittleAccordion,
  DescriptionAccordion,
} from "./styled";

const FAQAccordion = () => {
  const IconIsActive = {
    LocalmQuestions: false,
    LocalmEmpathy: false,
    frequentQuestions: true
  };


  return (
    <DivContainer>
      <Title>¿Dudas sobre los productos?</Title>
      <DivAccordion>
        <Accordion
          DivContainerAccordion={DivContainerAccordion}
          DivTitleAccordion={DivTitleAccordion}
          DivTextAccordion={DivTextAccordion}
          TittleAccordion={TittleAccordion}
          DescriptionAccordion={DescriptionAccordion}
          items={QuestionsJson.Products}
          IconIsActive={IconIsActive}
          isFAQPage
        ></Accordion>
      </DivAccordion>

      <Title>¿Dudas sobre los medios de pago?</Title>
      <DivAccordion>
        <Accordion
          DivContainerAccordion={DivContainerAccordion}
          DivTitleAccordion={DivTitleAccordion}
          DivTextAccordion={DivTextAccordion}
          TittleAccordion={TittleAccordion}
          DescriptionAccordion={DescriptionAccordion}
          items={QuestionsJson.PaymentMethods}
          IconIsActive={IconIsActive}
          isFAQPage
        ></Accordion>
      </DivAccordion>

      <Title>¿Dudas sobre el envío?</Title>
      <DivAccordion>
        <Accordion
          DivContainerAccordion={DivContainerAccordion}
          DivTitleAccordion={DivTitleAccordion}
          DivTextAccordion={DivTextAccordion}
          TittleAccordion={TittleAccordion}
          DescriptionAccordion={DescriptionAccordion}
          items={QuestionsJson.Shipment}
          IconIsActive={IconIsActive}
          isFAQPage
        ></Accordion>
      </DivAccordion>
    </DivContainer>
  );
};

export default FAQAccordion;

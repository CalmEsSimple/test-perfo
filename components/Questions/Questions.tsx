import faqQuestions from "../../jsons/FrequentQuestions/Localm.json";
import Accordion from "../Accordion/Accordion";
import {
  DivContainer,
  DivAccordion,
  Tittle,
  Bold,
  DivContainerAccordion,
  DivTitleAccordion,
  DivTextAccordion,
  TittleAccordion,
  DescriptionAccordion,
} from "./QuestionCss";

const Questions = () => {

  const IconIsActive = {
    LocalmQuestions: true,
    LocalmEmpathy: false,
    frequentQuestions: false
  };

  return (
    <DivContainer>
      <Tittle>
        preguntas
        <Bold> frecuentes </Bold>
      </Tittle>
      <DivAccordion>
        <Accordion
          DivContainerAccordion={DivContainerAccordion}
          DivTitleAccordion={DivTitleAccordion}
          DivTextAccordion={DivTextAccordion}
          TittleAccordion={TittleAccordion}
          DescriptionAccordion={DescriptionAccordion}
          items={faqQuestions}
          IconIsActive={IconIsActive}
        ></Accordion>
      </DivAccordion>
    </DivContainer>
  );
};

export default Questions;

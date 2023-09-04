import Accordion from "@/components/Accordion/Accordion";
import {
  DivQuestions,
  DivAccordion,
  Tittle,
  DivContainerAccordion,
  DivTitleAccordion,
  DivTextAccordion,
  TittleAccordion,
  DescriptionAccordion,
} from "./QuestionsCss";
import faqQuestions from "@/jsons/FrequentQuestions/CommitmentQuestions.json";

const Questions = () => {
  const IconIsActive = {
    LocalmQuestions: false,
    LocalmEmpathy: false,
    frequentQuestions: true,
  };

  return (
    <DivQuestions>
      <Tittle>
        Preguntas frecuentes 
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
    </DivQuestions>
  );
};

export default Questions;

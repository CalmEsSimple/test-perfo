import QuestionsJson from "@/jsons/FrequentQuestions/CategoryBedClothes.json";
import {
  DivContainer,
  DivAccordion,
  Title,
  DivContainerAccordion,
  DivTitleAccordion,
  DivTextAccordion,
  TittleAccordion,
  DescriptionAccordion,
} from "./RopaDeCamaFrequentQuestionsCss";
import Accordion from "@/components/Accordion/Accordion";

const RopaDeCamaFrequentQuestions = () => {
  const IconIsActive = {
    LocalmQuestions: true,
    LocalmEmpathy: false,
    frequentQuestions: false
  };

  return (
    <DivContainer>
      <Title>preguntas frecuentes sobre ropa de cama calm</Title>
      <DivAccordion>
        <Accordion
          DivContainerAccordion={DivContainerAccordion}
          DivTitleAccordion={DivTitleAccordion}
          DivTextAccordion={DivTextAccordion}
          TittleAccordion={TittleAccordion}
          DescriptionAccordion={DescriptionAccordion}
          items={QuestionsJson}
          IconIsActive={IconIsActive}
          firstBoxIsActive
        ></Accordion>
      </DivAccordion>
    </DivContainer>
  );
};

export default RopaDeCamaFrequentQuestions;

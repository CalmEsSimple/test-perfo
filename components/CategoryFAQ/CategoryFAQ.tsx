import {
  DivContainer,
  DivAccordion,
  Title,
  DivContainerAccordion,
  DivTitleAccordion,
  DivTextAccordion,
  TittleAccordion,
  DescriptionAccordion,
  Bold,
} from "./styled";
import Accordion from "@/components/Accordion/Accordion";
import { IAccordionItem } from "../Accordion/types";
const FrequentQuestions = ({faqAccordion, title, boldTitle ,is30night}: {faqAccordion?: IAccordionItem[], title: string, boldTitle: string ,is30night?:boolean}) => {
  const IconIsActive = {
    LocalmQuestions: true,
    LocalmEmpathy: false,
    frequentQuestions: false
  };

  return (
    <DivContainer $is30Night={is30night}>
      <Title >{title} <Bold $is30Night={is30night}>{boldTitle}</Bold></Title>
      <DivAccordion $is30Night={is30night}>
        <Accordion 
          is30night={is30night}
          DivContainerAccordion={DivContainerAccordion}
          DivTitleAccordion={DivTitleAccordion}
          DivTextAccordion={DivTextAccordion}
          TittleAccordion={TittleAccordion}
          DescriptionAccordion={DescriptionAccordion}
          items={faqAccordion}
          IconIsActive={IconIsActive}
          firstBoxIsActive
        ></Accordion>
      </DivAccordion>
    </DivContainer>
  );
};

export default FrequentQuestions;

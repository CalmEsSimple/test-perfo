import { useEffect, useState } from "react";
import { DivAccordion } from "./AccordionCss";
import AccordionUnit from "./AccordionUnit/AccordionUnit";
import { IProps } from "./types";

const Accordion = ({
  items,
  DivContainerAccordion,
  DivTitleAccordion,
  DivTextAccordion,
  TittleAccordion,
  DescriptionAccordion,
  IconIsActive,
  isFAQPage = false,
  firstBoxIsActive,
  is30night,
}: IProps) => {
  const [active, setActive] = useState<string | null>();

  const handleClick = (name: string) => {
    setActive(name === active ? null : name);
  };

  useEffect(() => {
    if(items && firstBoxIsActive) {
      setActive(items[0].title)
    }
  }, [firstBoxIsActive])
  return (
    <DivAccordion >
      {items && items.map((item, index) => {
        let isActive = active === item.title;
        return (
          <AccordionUnit
            key={item.title}
            onClick={() => handleClick(item.title)}
            itemName={item.title}
            itemContent={item.answer}
            isActive={isActive}
            DivContainerAccordion={DivContainerAccordion}
            DivTitleAccordion={DivTitleAccordion}
            DivTextAccordion={DivTextAccordion}
            TittleAccordion={TittleAccordion}
            DescriptionAccordion={DescriptionAccordion}
            IconIsActive={IconIsActive}
            isLastUnit={index == items.length - 1}
            isFAQPage={isFAQPage}
            is30night={is30night}
          />
        );
      })}
    </DivAccordion>
  );
};

export default Accordion;

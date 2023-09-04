import { useState, useEffect } from "react";
import {
  DivEmpathy,
  Titles,
  Text,
  DivText,
  DivTextSeparator,
  DivContainerAccordion,
  DivTitleAccordion,
  DivTextAccordion,
  TittleAccordion,
  DescriptionAccordion,
  Bold,
} from "./EmpathyCss";
import EmpathyData from "../../../jsons/localmEmpathy.json";
import Accordion from "@/components/Accordion/Accordion";
import { useWidth } from "@/hooks/useWidth";

const Empathy = () => {
  const width = useWidth();
  const breakpoint = 768;

  const IconIsActive = {
    LocalmQuestions: false,
    LocalmEmpathy: true,
    frequentQuestions: false,
  };

  return (
    <>
      {width > breakpoint ? (
        <DivEmpathy>
          <DivText>
            <Titles>
              <Bold>empatía.</Bold>
            </Titles>
            <br />
            <Text>
              Escuchamos a las personas en todas las instancias: Queremos saber
              cómo se sienten en todo momento. Las personas siempre están en el
              centro.
            </Text>
          </DivText>
          <DivTextSeparator>
            <Titles>
              <Bold>simpleza.</Bold>
            </Titles>
            <br />
            <Text>
              La simpleza es nuestra fuente principal de inspiración. Nos gustan
              las cosas funcionales, sin mucha vuelta. Porque la belleza, está
              en lo simple.
            </Text>
          </DivTextSeparator>
          <DivText>
            <Titles>
              <Bold>innovación.</Bold>
            </Titles>
            <br />
            <Text>
              A través de nuestros valores creamos una experiencia de compra
              innovadora, para que puedas encontrar con nuestra ayuda tu
              descanso ideal.
            </Text>
          </DivText>
        </DivEmpathy>
      ) : (
        <Accordion
          DivContainerAccordion={DivContainerAccordion}
          DivTitleAccordion={DivTitleAccordion}
          DivTextAccordion={DivTextAccordion}
          TittleAccordion={TittleAccordion}
          DescriptionAccordion={DescriptionAccordion}
          items={EmpathyData}
          IconIsActive={IconIsActive}
        ></Accordion>
      )}
    </>
  );
};

export default Empathy;

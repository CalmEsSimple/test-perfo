import {
  DivSimple,
  TitleSimple,
  BodySimple,
  DivUnit,
  TitleDivs,
  TextDivs,
  DivContainerAccordion,
  DivTitleAccordion,
  DivTextAccordion,
  TittleAccordion,
  DescriptionAccordion,
  Bold
} from "./SimpleCss";
import Accordion from "../Accordion/Accordion";
import { useWidth } from "@/hooks/useWidth";
import { deviceSizes } from "@/utils/Theme";

const Simple = () => {
  const width = useWidth();
  const IconIsActive = {
    LocalmQuestions: true,
    LocalmEmpathy: false,
    frequentQuestions: false,
  };

  const items = [
    {
      nro: 1,
      title: "Simple de <b>comprar</b>.",
      answer:
        "Desarrollamos el colchón mejor puntuado de Argentina, para que no tengas que comparar entre miles de modelos. <br/>",
    },
    {
      nro: 1,
      title: "Simple de <b>probar</b>.",
      answer:
        "Creemos que para encontrar tu descanso ideal necesitas más que 5 minutos en un local. Por eso tenes 30 noches de prueba ¡en tu casa!",
    },
    {
      nro: 1,
      title: "Simple de <b>devolver</b>.",
      answer:
        "Si no lo amás, avisanos y coordinamos el retiro. Te devolvemos hasta el último centavo, así de simple.",
    },
  ];

  return (
    <DivSimple>
      <TitleSimple>
        calm es <Bold>simple</Bold>.
      </TitleSimple>

      {width > deviceSizes.mobile ? (
        <BodySimple>
          <DivUnit>
            <TitleDivs>
              simple de <Bold>comprar</Bold>.
            </TitleDivs>
            <TextDivs>
              Desarrollamos el colchón <Bold>mejor puntuado</Bold> de Argentina, para
              que no tengas que comparar entre miles de modelos.
            </TextDivs>
          </DivUnit>
          <DivUnit>
            <TitleDivs>
              simple de <Bold>probar</Bold>.
            </TitleDivs>
            <TextDivs>
              Creemos que para encontrar tu <Bold>descanso ideal</Bold> necesitas más
              que 5 minutos en un local. Por eso tenes <Bold>30 noches</Bold> de
              prueba <Bold>¡en tu casa!</Bold>
            </TextDivs>
          </DivUnit>
          <DivUnit>
            <TitleDivs>
              simple de <Bold>devolver</Bold>.
            </TitleDivs>
            <TextDivs>
              Si no lo amás, avisanos y coordinamos el retiro. Te devolvemos
              <Bold> hasta el último centavo</Bold>, así de simple.
            </TextDivs>
          </DivUnit>
        </BodySimple>
      ) : (
          <Accordion
            DivContainerAccordion={DivContainerAccordion}
            DivTitleAccordion={DivTitleAccordion}
            DivTextAccordion={DivTextAccordion}
            TittleAccordion={TittleAccordion}
            DescriptionAccordion={DescriptionAccordion}
            items={items}
            IconIsActive={IconIsActive}
          ></Accordion>
      )}
    </DivSimple>
  );
};

export default Simple;

import {
  DivExperience,
  DivLimit,
  Title,
  DivInformation,
  DivUnit,
  ImgTitle,
  TextUnit,
  Bold,
  LineBreak
} from "./ExperienceCss";
import { useWidth } from "@/hooks/useWidth";
import { deviceSizes } from "@/utils/Theme";

const Experience = () => {
  return (
    <DivExperience>
      <DivLimit>
        <Title>
          creamos una nueva <LineBreak></LineBreak><Bold>experiencia de compra.</Bold>
        </Title>
        {useWidth() > deviceSizes.mobile ? (
          <DivInformation>
            <DivUnit>
              <ImgTitle
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/1cad7c50-4701-4304-c72b-32b5ac7e8000/fit=cover"
                alt="Icono de Facebook"
                sizes="(max-width: 450px) 100vw, 450px"
              />
              <TextUnit>
                Caso de éxito <br />
                Facebook 2020
              </TextUnit>
            </DivUnit>
            <DivUnit>
              <ImgTitle
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/57b241fa-53b1-4e1c-ecc0-757ceb8d2300/fit=cover"
                alt="puntuacion colchon calm"
              />
              <TextUnit>
                El colchón mejor <br /> puntuado
              </TextUnit>
            </DivUnit>
            <DivUnit>
              <ImgTitle
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/364a8712-63a0-4f71-5dd4-1c7ef1289a00/fit=cover"
                alt="la nacion"
                sizes="(max-width: 450px) 100vw, 450px"
              />
              <TextUnit>
                "Una marca innovadora para el mercado argentino"
              </TextUnit>
            </DivUnit>
            <DivUnit>
              <ImgTitle
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/6fd620d0-a351-4c30-472d-f782e3b87700/fit=cover"
                alt="Sello"
              />
              <TextUnit>Sello Buen Diseño Argentino</TextUnit>
            </DivUnit>
            <DivUnit>
              <ImgTitle
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/ee119511-098e-49a1-2b4e-866a38b0e900/fit=cover"
                alt="Icono de Google"
                sizes="(max-width: 450px) 100vw, 450px"
              />
              <TextUnit>Selección programa de crecimiento acelerado</TextUnit>
            </DivUnit>
          </DivInformation>
        ) : (
          <DivInformation>
            <DivUnit>
              <ImgTitle
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/57b241fa-53b1-4e1c-ecc0-757ceb8d2300/fit=cover"
                alt="puntuacion colchon calm"
              />
              <TextUnit>
                El colchón mejor <br /> puntuado
              </TextUnit>
            </DivUnit>
            <DivUnit>
              <ImgTitle
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/364a8712-63a0-4f71-5dd4-1c7ef1289a00/fit=cover"
                alt="la nacion"
                sizes="(max-width: 450px) 100vw, 450px"
              />
              <TextUnit>
                "Una marca innovadora para el mercado argentino"
              </TextUnit>
            </DivUnit>
            <DivUnit>
              <ImgTitle
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/6fd620d0-a351-4c30-472d-f782e3b87700/fit=cover"
                alt="Sello"
              />
              <TextUnit>Sello Buen Diseño Argentino</TextUnit>
            </DivUnit>
          </DivInformation>
        )}
      </DivLimit>
    </DivExperience>
  );
};

export default Experience;

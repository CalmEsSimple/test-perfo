import {
  DivCombinations,
  DivInformation,
  DivImages,
  DivDivisor,
  DivDivisorImg,
  Img,
  DivDivisorText,
  Description,
  DivBar,
  DivBarImgs,
  DivImgHot,
  DivImgCold,
  DivTexts,
  ImgHot,
  ImgCold,
  TitleText,
  Text,
  DivCombinationsText
} from "./CombinationsCss";

const Combinations = () => {
  return (
    <DivCombinations>
      <DivInformation>
        <DivImages>
          <DivDivisor>
            <DivDivisorImg>
              <Img
                src="https://calmessimple.com.ar/wp-content/uploads/2022/05/edredón-abrazo.webp"
                data-src="https://calmessimple.com.ar/wp-content/uploads/2022/05/edredón-abrazo.webp"
                alt="edredón abrazo"
              />
            </DivDivisorImg>
            <DivDivisorText>
              <Description>
                edredón <br /> <b>Abrazo</b>
              </Description>
            </DivDivisorText>
          </DivDivisor>
          <DivDivisor>
            <DivDivisorImg>
              <Img
                src="https://calmessimple.com.ar/wp-content/uploads/2022/05/funda-tusor-4-estaciones.webp"
                data-src="https://calmessimple.com.ar/wp-content/uploads/2022/05/funda-tusor-4-estaciones.webp"
                alt="Funda de tusor"
              />
            </DivDivisorImg>
            <DivDivisorText>
              <Description>
                funda de tusor <br /> <b>4 estaciones</b>
              </Description>
            </DivDivisorText>
          </DivDivisor>
          <DivBar />
          <DivBarImgs>
            <DivImgHot>
              <ImgHot
                src="https://calmessimple.com.ar/wp-content/uploads/2022/09/sol.png"
                data-src="https://calmessimple.com.ar/wp-content/uploads/2022/09/sol.png"
                alt="icono de sol"
              />
            </DivImgHot>
            <DivImgCold>
              <ImgCold
                src="https://calmessimple.com.ar/wp-content/uploads/2022/09/hhielo.png"
                data-src="https://calmessimple.com.ar/wp-content/uploads/2022/09/hhielo.png"
                alt="icono de sol"
              />
            </DivImgCold>
          </DivBarImgs>
        </DivImages>
        <DivTexts>
            <DivCombinationsText>
          <TitleText>Combinaciones perfectas.</TitleText>
          <Text>
            La funda es ligera y transpirable para que la uses
            <b> todo el año</b>. El edredón combate el frío y la humedad. Entre
            ambos son la <b>combinación perfecta</b> contra el frío.
          </Text>
          </DivCombinationsText>
        </DivTexts>
      </DivInformation>
    </DivCombinations>
  );
};

export default Combinations;

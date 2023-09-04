import { formatNumber } from "@/utils/formatPrices";
import {
  DivColchonIdeal,
  TitleColchonIdeal,
  TextTitle,
  DivInformation,
  DivHalf,
  TitleImage,
  DivImgText,
  Img,
  DivTitleInformation,
  TitlesInformation,
  TextInformation,
  ImgRated,
  ColorPrice,
  Price
} from "./ColchonIdealCss";

const ColchonIdeal = ({colchonPrice, hibridoPrice}: {colchonPrice: number, hibridoPrice: number}) => {
  return (
    <DivColchonIdeal>
      <TitleColchonIdeal>Encontrá tu colchón ideal</TitleColchonIdeal>
      <TextTitle>Usá nuestra tabla comparativa de colchones.</TextTitle>
      <DivInformation>
        <DivHalf>
          <DivImgText>
            <Img
              src="https://calmessimple.com.ar/wp-content/uploads/2023/06/ComparativaOriginal.webp"
              data-src="https://calmessimple.com.ar/wp-content/uploads/2023/06/ComparativaOriginal.webp"
              alt="Colchón Calm Original"
            />
            <TitleImage>Original</TitleImage>
          </DivImgText>
        </DivHalf>
        <DivHalf>
          <DivImgText>
            <Img
              src="https://calmessimple.com.ar/wp-content/uploads/2023/06/ComparativaHíbrido.webp"
              data-src="https://calmessimple.com.ar/wp-content/uploads/2023/06/ComparativaHíbrido.webp"
              alt="Colchón Calm Híbrido"
            />
            <TitleImage>Híbrido</TitleImage>
          </DivImgText>
        </DivHalf>
      </DivInformation>

      <div>
        <DivTitleInformation>
          <TitlesInformation>Capas</TitlesInformation>
        </DivTitleInformation>
        <DivInformation>
          <DivHalf>
            <DivImgText>
              <Img
                src="https://calmessimple.com.ar/wp-content/uploads/2023/06/CapasOriginal.webp"
                data-src="https://calmessimple.com.ar/wp-content/uploads/2023/06/CapasOriginal.webp"
                alt="Capas Colchón Original"
              />
              <TextInformation>
                Núcleo de espuma y 1 capa de espuma
              </TextInformation>
            </DivImgText>
          </DivHalf>
          <DivHalf>
            <DivImgText>
              <Img
                src="https://calmessimple.com.ar/wp-content/uploads/2023/06/CapasHíbrido.webp"
                data-src="https://calmessimple.com.ar/wp-content/uploads/2023/06/CapasHíbrido.webp"
                alt="Capas Colchón Híbrido"
              />
              <TextInformation>
                Núcleo de resortes pocket y 3 capas de espuma
              </TextInformation>
            </DivImgText>
          </DivHalf>
        </DivInformation>
      </div>

      <div>
        <DivTitleInformation>
          <TitlesInformation>Firmeza</TitlesInformation>
        </DivTitleInformation>
        <DivInformation>
          <DivHalf>
            <DivImgText>
              <ImgRated
                src="https://calmessimple.com.ar/wp-content/uploads/2023/06/Firmeza-Original.svg"
                data-src="https://calmessimple.com.ar/wp-content/uploads/2023/06/Firmeza-Original.svg"
                alt="Firmeza"
                data-srcset="https://calmessimple.com.ar/wp-content/uploads//2023/06/Firmeza-Original.svg 150w, https://calmessimple.com.ar/wp-content/uploads//2023/06/Firmeza-Original.svg 300w, https://calmessimple.com.ar/wp-content/uploads//2023/06/Firmeza-Original.svg 1024w"
                data-sizes="(max-width: 980px) 100vw, 980px"
                sizes="(max-width: 980px) 100vw, 980px"
                srcSet="https://calmessimple.com.ar/wp-content/uploads//2023/06/Firmeza-Original.svg 150w, https://calmessimple.com.ar/wp-content/uploads//2023/06/Firmeza-Original.svg 300w, https://calmessimple.com.ar/wp-content/uploads//2023/06/Firmeza-Original.svg 1024w"
              />
            </DivImgText>
          </DivHalf>
          <DivHalf>
            <DivImgText>
              <ImgRated
                src="https://calmessimple.com.ar/wp-content/uploads/2023/06/Firmeza-Híbrido.svg"
                data-src="https://calmessimple.com.ar/wp-content/uploads/2023/06/Firmeza-Híbrido.svg"
                alt="Firmeza"
                data-srcset="https://calmessimple.com.ar/wp-content/uploads//2023/06/Firmeza-Híbrido.svg 150w, https://calmessimple.com.ar/wp-content/uploads//2023/06/Firmeza-Híbrido.svg 300w, https://calmessimple.com.ar/wp-content/uploads//2023/06/Firmeza-Híbrido.svg 1024w"
                data-sizes="(max-width: 980px) 100vw, 980px"
                sizes="(max-width: 980px) 100vw, 980px"
                srcSet="https://calmessimple.com.ar/wp-content/uploads//2023/06/Firmeza-Híbrido.svg 150w, https://calmessimple.com.ar/wp-content/uploads//2023/06/Firmeza-Híbrido.svg 300w, https://calmessimple.com.ar/wp-content/uploads//2023/06/Firmeza-Híbrido.svg 1024w"
              />
            </DivImgText>
          </DivHalf>
        </DivInformation>
      </div>

      <div>
        <DivTitleInformation>
          <TitlesInformation>Durabilidad</TitlesInformation>
        </DivTitleInformation>
        <DivInformation>
          <DivHalf>
            <TextInformation>Entre 5 y 8 años</TextInformation>
          </DivHalf>
          <DivHalf>
            <TextInformation>Entre 5 y 8 años</TextInformation>
          </DivHalf>
        </DivInformation>
      </div>

      <div>
        <DivTitleInformation>
          <TitlesInformation>Circulación de aire</TitlesInformation>
        </DivTitleInformation>
        <DivInformation>
          <DivHalf>
            <DivImgText>
              <Img
                src="https://calmessimple.com.ar/wp-content/uploads/2023/06/aire-original.svg"
                data-src="https://calmessimple.com.ar/wp-content/uploads/2023/06/aire-original.svg"
                alt="Circulación de aire"
                data-srcset="https://calmessimple.com.ar/wp-content/uploads//2023/06/aire-original.svg 150w, https://calmessimple.com.ar/wp-content/uploads//2023/06/aire-original.svg 300w, https://calmessimple.com.ar/wp-content/uploads//2023/06/aire-original.svg 1024w"
                data-sizes="(max-width: 980px) 100vw, 980px"
                sizes="(max-width: 980px) 100vw, 980px"
                srcSet="https://calmessimple.com.ar/wp-content/uploads//2023/06/aire-original.svg 150w, https://calmessimple.com.ar/wp-content/uploads//2023/06/aire-original.svg 300w, https://calmessimple.com.ar/wp-content/uploads//2023/06/aire-original.svg 1024w"
              />
              <TextInformation>
                Buena circulación de aire gracias a su espuma con tecnología de
                celdas abiertas
              </TextInformation>
            </DivImgText>
          </DivHalf>
          <DivHalf>
            <DivImgText>
              <Img
                src="https://calmessimple.com.ar/wp-content/uploads/2023/06/aire-híbrido.svg"
                data-src="https://calmessimple.com.ar/wp-content/uploads/2023/06/aire-híbrido.svg"
                alt="Circulación de aire"
                data-srcset="https://calmessimple.com.ar/wp-content/uploads//2023/06/aire-híbrido.svg 150w, https://calmessimple.com.ar/wp-content/uploads//2023/06/aire-híbrido.svg 300w, https://calmessimple.com.ar/wp-content/uploads//2023/06/aire-híbrido.svg 1024w"
                data-sizes="(max-width: 980px) 100vw, 980px"
                sizes="(max-width: 980px) 100vw, 980px"
                srcSet="https://calmessimple.com.ar/wp-content/uploads//2023/06/aire-híbrido.svg 150w, https://calmessimple.com.ar/wp-content/uploads//2023/06/aire-híbrido.svg 300w, https://calmessimple.com.ar/wp-content/uploads//2023/06/aire-híbrido.svg 1024w"
              />
              <TextInformation>
                Alta circulación de aire debido a su núcleo de resortes
              </TextInformation>
            </DivImgText>
          </DivHalf>
        </DivInformation>
      </div>

      <div>
        <DivTitleInformation>
          <TitlesInformation>Hábitos</TitlesInformation>
        </DivTitleInformation>
        <DivInformation>
          <DivHalf>
            <TextInformation>
              Si tenés problemas de espalda o columna, este es tu colchón
            </TextInformation>
          </DivHalf>
          <DivHalf>
            <TextInformation>
              Si sufris el calor durante la noche, este es tu colchón
            </TextInformation>
          </DivHalf>
        </DivInformation>
      </div>

      <div>
        <DivTitleInformation>
          <TitlesInformation>Precio</TitlesInformation>
        </DivTitleInformation>
        <DivInformation>
          <DivHalf>
            <ColorPrice>desde: <br />  <span>${formatNumber(colchonPrice)}</span></ColorPrice>
          </DivHalf>
          <DivHalf>
            <Price>desde: <br /> <span>${formatNumber(hibridoPrice)}</span></Price>
          </DivHalf>
        </DivInformation>
      </div>
    </DivColchonIdeal>
  );
};

export default ColchonIdeal;

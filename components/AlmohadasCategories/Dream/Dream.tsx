import {
  DivDream,
  TitleDreams,
  DivInformation,
  InfomationUnit,
  TitleInformation,
  DivImgInformation,
  Img,
  DivTextInformation,
  Text,
  DivButton,
  Button
} from "./DreamCss";

const Dream = () => {
  return (
    <DivDream>
      <TitleDreams>
        las almohadas <b>de tus sueños</b>
      </TitleDreams>
      <DivInformation>
        <InfomationUnit>
          <TitleInformation>
            Almohada <br /> <b>Inteligente</b>
          </TitleInformation>
          <DivImgInformation>
            <Img
              src="https://calmessimple.com.ar/wp-content/uploads/2019/10/Render-principal-turno-1.webp"
              data-src="https://calmessimple.com.ar/wp-content/uploads/2019/10/Render-principal-turno-1.webp"
              alt="Almohada inteligente"
            />
          </DivImgInformation>
          <DivTextInformation>
            <Text>
              <b>Firmeza</b> <br /> Más firme
            </Text>
          </DivTextInformation>
          <DivTextInformation>
            <Text>
              <b>Altura</b> <br /> Media
            </Text>
          </DivTextInformation>
          <DivTextInformation>
            <DivButton href="https://calmessimple.com.ar/producto/almohada-calm/">
              <Button title="Ver producto" aria-label="Ver producto">Es para mí</Button>
            </DivButton>
          </DivTextInformation>
        </InfomationUnit>

        <InfomationUnit>
          <TitleInformation>
            Almohada <br />
            <b>Infinita</b>
          </TitleInformation>
          <DivImgInformation>
            <Img
              src="https://calmessimple.com.ar/wp-content/uploads/2021/06/Render-turno-1.webp"
              data-src="https://calmessimple.com.ar/wp-content/uploads/2021/06/Render-turno-1.webp"
              alt="Almohada infinita con caja"
            />
          </DivImgInformation>
          <DivTextInformation>
            <Text>
              <b>Firmeza</b> <br /> Regulable
            </Text>
          </DivTextInformation>
          <DivTextInformation>
            <Text>
              <b>Altura</b> <br /> Regulable
            </Text>
          </DivTextInformation>
          <DivTextInformation>
            <DivButton href="https://calmessimple.com.ar/producto/almohada-infinita/">
              <Button title="Ver producto" aria-label="Ver producto">Es para mí</Button>
            </DivButton>
          </DivTextInformation>
        </InfomationUnit>

        <InfomationUnit>
          <TitleInformation>
            Almohada <br /> <b>Doble Sensación</b>
          </TitleInformation>
          <DivImgInformation>
            <Img
              src="https://calmessimple.com.ar/wp-content/uploads/2021/06/Render-turno-1.webp"
              data-src="https://calmessimple.com.ar/wp-content/uploads/2021/06/Render-turno-1.webp"
              alt="Almohada infinita con caja"
            />
          </DivImgInformation>
          <DivTextInformation>
            <Text>
              <b>Firmeza</b> <br /> Regulable
            </Text>
          </DivTextInformation>
          <DivTextInformation>
            <Text>
              <b>Altura</b> <br /> Media
            </Text>
          </DivTextInformation>
          <DivTextInformation>
            <DivButton href="https://calmessimple.com.ar/producto/almohada-doble-sensacion/">
              <Button title="Ver producto" aria-label="Ver producto">Es para mí</Button>
            </DivButton>
          </DivTextInformation>
        </InfomationUnit>

        <InfomationUnit>
          <TitleInformation>
            Alta <br /> <b>Almohada</b>
          </TitleInformation>
          <DivImgInformation>
            <Img
              src="https://calmessimple.com.ar/wp-content/uploads/2022/05/Render-turno-1-1.webp"
              data-src="https://calmessimple.com.ar/wp-content/uploads/2022/05/Render-turno-1-1.webp"
              alt="Alta almohada súper resistente"
            />
          </DivImgInformation>
          <DivTextInformation>
            <Text>
              <b>Firmeza</b> <br /> Más mullida
            </Text>
          </DivTextInformation>
          <DivTextInformation>
            <Text>
              <b>Altura</b> <br /> Baja
            </Text>
          </DivTextInformation>
          <DivTextInformation>
            <DivButton href="https://calmessimple.com.ar/producto/alta-almohada/">
              <Button title="Ver producto" aria-label="Ver producto">Es para mí</Button>
            </DivButton>
          </DivTextInformation>
        </InfomationUnit>
      </DivInformation>
    </DivDream>
  );
};

export default Dream;

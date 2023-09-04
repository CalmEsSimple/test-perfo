import React from "react";
import { useState } from "react";
import {
  ImgSection,
  TitlePickUpContainer,
  TitlePickUp,
  PhraseWithdrawal,
  ContainerGuiaVehiculo,
  TitleGuiaVehiculo,
  ContainerImgs,
  ImgVehiculos,
  FullscreenImage,
  FullscreenImgVehiculos,
  Ask,
  TextComponentContainer,
  TitleTextComponent,
  Text,
} from "./pickUpComponentCss";

export function PickUpComponent() {
  return (
    <div>
      <ImgSection>
        <TitlePickUpContainer>
          <TitlePickUp>RETIRO</TitlePickUp>
          <PhraseWithdrawal>
            Retira tu pedido por nuestras oficinas de forma simple, rápida y
            efectiva.
          </PhraseWithdrawal>
        </TitlePickUpContainer>
      </ImgSection>
      <TextComponentContainer>
        <TitleTextComponent>
          Ofrecemos la opción de retiro para todos nuestros productos.
        </TitleTextComponent>
        <Text>
          {" "}
          Si vivís cerca de nuestras oficinas, estabas por la zona o solo no
          podes aguantar las ganas de tener tu nuevo descanso, desde Calm te
          ofrecemos esta opción 🚀
        </Text>
        <Ask>¿Cómo funciona?</Ask>
      </TextComponentContainer>
    </div>
  );
}

export function GuiaVehiculos() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (imageUrl: any) => {
    setFullscreenImage(imageUrl);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div>
      <ContainerGuiaVehiculo>
        <TitleGuiaVehiculo>Guía de vehículos</TitleGuiaVehiculo>
      </ContainerGuiaVehiculo>
      <ContainerImgs>
        <ImgVehiculos
          src="https://calmessimple.com.ar/wp-content/uploads/2021/09/800x1000_ReferenciasVehiculos.jpg"
          alt="Imagen 1"
          onClick={() =>
            handleImageClick(
              "https://calmessimple.com.ar/wp-content/uploads/2021/09/800x1000_ReferenciasVehiculos.jpg"
            )
          }
        />
        <ImgVehiculos
          src="https://calmessimple.com.ar/wp-content/uploads/2023/06/Tamaños_Tabla.png"
          alt="Imagen 2"
          onClick={() =>
            handleImageClick(
              "https://calmessimple.com.ar/wp-content/uploads/2023/06/Tamaños_Tabla.png"
            )
          }
        />
      </ContainerImgs>
      {fullscreenImage && (
        <FullscreenImage onClick={closeFullscreen}>
          <FullscreenImgVehiculos
            src={fullscreenImage}
            alt="Imagen en pantalla completa"
          />
        </FullscreenImage>
      )}
    </div>
  );
}

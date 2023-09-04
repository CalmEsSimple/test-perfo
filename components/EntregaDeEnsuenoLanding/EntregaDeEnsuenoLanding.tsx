import React from 'react'
import {
  ProductInfoContainer,
  PasoAPasoContainer,
  LandingContainer,
  InfoContainer,
  NuggetsContainer,
  MediaContainer,
  PasosContainer,
  ReciclarContainer,
  DivLine,
  PasoAPasoInfo,
  SpanTitle,
  Title,
  BoldTitle,
  Description,
  ProductDetail,
  Price,
} from './styled'
import { NuggetsReview } from '@/components/ProductLanding/components/NuggetReview/NuggetReview'
import PostalInput from '@/components/ProductLanding/components/PostalInput/PostalInput'

import CodigosPostales from '@/utils/cabaCPs'
import Image from 'next/image'
import ReviewsStars from '@/components/ProductLanding/components/Reviews/ReviewsStars/ReviewsStars'
import Modal from '@/components/ProductLanding/components/Modal/Modal'

function EntregaDeEnsuenoLanding() {
  return (
    <LandingContainer>
      <InfoContainer>
        <MediaContainer>
          <Image
            src="https://calmessimple.com.ar/wp-content/uploads/2023/03/IMG_PRODU_ENTREGA.webp"
            alt="Logo del producto Entrega de Ensueño"
            layout="responsive"
            width={300}
            height={300}
          />
        </MediaContainer>
        <ProductInfoContainer>
          <SpanTitle>
            <Title>entrega</Title>
            <BoldTitle>de ensueño</BoldTitle>
          </SpanTitle>
          <ReviewsStars skus="EXPENTENS000000" />
          <Description>dejamos tu habitación pipí cucú</Description>
          <ProductDetail>
            <b>Sobre el servicio</b>
            <p>
              Nuestros productos son super fáciles de armar pero si necesitas
              que lo hagamos por vos, entrega de ensueño es el servicio ideal
              para que no tengas que preocuparte por nada.{' '}
            </p>
            <p>
              Nuestros expertos van a abrir los productos, instalarlos, reciclar
              los envoltorios y siempre que vos quieras, se pueden llevar tu
              ex-colchón y/o base.
            </p>
          </ProductDetail>
          <Price>$ 6.000</Price>
          <PostalInput
            alertMessage="Para solicitar este servicio, tildá la opción de entrega de ensueño en los productos habilitados. Podés chequear si entrega de ensueño llega a tu domicilio introduciendo tu CP acá abajo"
            codigosPostales={CodigosPostales}
            showTitle={false}
            showButton={false}
          />
        </ProductInfoContainer>
      </InfoContainer>
      <InfoContainer>
        <div>
          <DivLine />
          <MediaContainer>
            <video
              autoPlay
              loop
              muted={true}
              playsInline
              controlsList="nodownload"
              src="https://calmessimple.com.ar/wp-content/uploads/2023/03/video_entregadeensueño.webm"
            />
          </MediaContainer>
          <ReciclarContainer>
            <Image
              src="https://calmessimple.com.ar/wp-content/uploads//2023/03/icono_circular.svg"
              width={100}
              height={100}
              alt="Imagen representante del reciclaje"
            />
            <p>
              Reciclamos el packaging de todos los productos que abrimos en
              entrega de ensueño y donamos tu ex-colchón y/o base para que otra
              familia pueda descansar mejor
            </p>
          </ReciclarContainer>
        </div>

        <PasoAPasoContainer>
          <NuggetsContainer>
            <NuggetsReview skus="EXPENTENS000000" />
          </NuggetsContainer>
          <PasosContainer>
            <h2>paso a paso de nuestra entrega de ensueño</h2>
            <span>
              <h3>1</h3>
              <p>
                te vamos a llamar media hora antes para confirmar que estés en
                tu domicilio
              </p>
            </span>
            <span>
              <h3>2</h3>
              <p>
                llegamos con todo lo necesario y liberamos el espacio donde
                vayas a querer tu nueva cama
              </p>
            </span>
            <span>
              <h3>3</h3>
              <p>
                armamos tu nueva cama sobre una alfombra para no dañar tu piso
                <br />
                <b>si querés, también le colocamos las sábanas</b>
              </p>
            </span>
            <span>
              <h3>4</h3>
              <p>
                nos llevamos todo el packaging y si vos querés, también nos
                llevamos tu ex-colchón y/o base para donar
              </p>
            </span>
            <span>
              <h3>5</h3>
              <p> limpiamos la zona donde estuvimos trabajando</p>
            </span>
            <span>
              <h3>6</h3>
              <p>no nos vamos sin antes darte un regalito 😉</p>
            </span>
            <PasoAPasoInfo>
              si tenes alguna otra duda, escribinos al chat
            </PasoAPasoInfo>
          </PasosContainer>
        </PasoAPasoContainer>
      </InfoContainer>
    </LandingContainer>
  )
}

export default EntregaDeEnsuenoLanding

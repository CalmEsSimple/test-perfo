import { useState } from "react";
import { Gallery, MainImg, BtnFullScreen, BackButton, ButtonWrapper, PillWrapper } from "./GalleryCarrouselCss";
import ModalGallery from "../ModalGallery/ModalGallery";
//import { useWidth } from "@/hooks/useWidth";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PillOfferProduct from "@/components/PillOfferProduct/PillOfferProduct";

const GalleryCorousel = ({images, pillId}: {images: string[], pillId?: string}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  //const width = useWidth()
  //const breakpoint = 768;

  const renderThumbs = () =>
    images.map((thumbnail) => (<img src={thumbnail} alt={thumbnail} key={thumbnail} />)
  )

  const sliderArrow = (clickHandler: () => void, hasPrev: boolean, label: string, isNext?: boolean) => (
    <ButtonWrapper $isNext={isNext} onClick={clickHandler}>
      <BackButton $isNext={isNext} color="#999"/>
    </ButtonWrapper>
  )

  return (
    <>
      <Gallery>
        <Carousel
          autoPlay
          infiniteLoop
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={40}
          showStatus={false}
          renderThumbs={renderThumbs}
          showIndicators={false}
          renderArrowPrev={(clickHandler: () => void, hasPrev: boolean, label: string) => sliderArrow(clickHandler, hasPrev, label)}
          renderArrowNext={(clickHandler: () => void, hasPrev: boolean, label: string) => sliderArrow(clickHandler, hasPrev, label, true)}
        >
          {images.map((image: string) => (
            <div key={image}>
              <>
                <MainImg src={image} onClick={() => {
                  setImgUrl(image)
                  setModalOpen(true)
                }} />
                {pillId && <PillWrapper><PillOfferProduct pillId={pillId} /></PillWrapper>}
                <BtnFullScreen
                  title="Imagen en pantalla completa"
                  aria-label="Imagen en pantalla completa"
                  onClick={() => {
                    setImgUrl(image)
                    setModalOpen(true)
                  }}
                >
                  <img
                    src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/f52b9902-ab04-476b-6d34-61d99d8a0700/fit=scale-down"
                    alt="pantalla-completa"
                  />
                </BtnFullScreen>
              </>
            </div>
          ))}
        </Carousel>
      </Gallery>
      <ModalGallery isOpen={modalOpen} closeModal={() => setModalOpen(false)} imgUrl={imgUrl} />
    </>
  );
};

export default GalleryCorousel;

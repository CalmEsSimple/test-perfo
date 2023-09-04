import { Gallery, BackButton, ButtonWrapper } from "./CarouselCss";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IProps } from "../types";
import parse from 'html-react-parser';
import {
    Card,
    DivContainerCard,
    DivImageCard,
    ImageCard,
    DivTextCard
} from "../HelpCss";

function Carrousel({ cards, Title, Text, background, carousel }: IProps) {
  const sliderArrow = (clickHandler: () => void, hasPrev: boolean, label: string, isNext?: boolean) => (
    <ButtonWrapper $isNext={isNext} onClick={clickHandler}>
      <BackButton $isNext={isNext} color="#999"/>
    </ButtonWrapper>
  );

  return (
    <>
      <Gallery>
        <Carousel
          autoPlay
          infiniteLoop
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={40}
          showStatus={false}
          showIndicators={false}
          renderArrowPrev={(clickHandler: () => void, hasPrev: boolean, label: string) => sliderArrow(clickHandler, hasPrev, label)}
          renderArrowNext={(clickHandler: () => void, hasPrev: boolean, label: string) => sliderArrow(clickHandler, hasPrev, label, true)}
        >
         {cards.map((card, index) => (
            <Card key={index} background={background} carousel={carousel}>
              <DivContainerCard carousel={carousel}>
              <DivImageCard carousel={carousel}>
              <ImageCard carousel={carousel} src={card.img.url} alt={card.img.alt}/> 
              </DivImageCard>
              <DivTextCard carousel={carousel}>
               { Title && <Title>{card.step}</Title>}
              { Text &&  <Text>{parse(card.text)}</Text>}
              </DivTextCard>
              </DivContainerCard>
            </Card>
        ))}
        </Carousel>
      </Gallery>
    </>
  );
}

export default Carrousel;

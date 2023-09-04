import { BackButton, BannerSubtitle, BannerTitle, Button, ButtonWrapper, PlainImage, SliderContainer, SliderWrapper, Wrapper } from './SliderBigBannerCss'
import { Carousel } from 'react-responsive-carousel';
import { deviceSizes } from '@/utils/Theme';
import { getBigBanner } from '@/utils/hygraphHelper';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useWidth } from '@/hooks/useWidth';
import { useQuery } from '@apollo/client';
import { IPlainImageSlide } from '@/types';

const SliderBigBanner = ({ bannerId }: { bannerId: string}) => {
  const { loading, data } = useQuery(getBigBanner, {
    variables: { id: bannerId }
  });
  const width = useWidth()
  const isSM = width < deviceSizes.mobile

  const sliderArrow = (clickHandler: () => void, hasPrev: boolean, label: string, isNext?: boolean) => (
    <ButtonWrapper $isNext={isNext} onClick={clickHandler}>
      <BackButton $isNext={isNext} color="#999"/>
      </ButtonWrapper>
  )

  return (
    <SliderContainer>
      {
        !loading && data.bigBanner.imagesData.length > 1 &&
        <Carousel
          autoPlay
          showStatus={false}
          infiniteLoop
          showThumbs={false}
          renderArrowPrev={(clickHandler: () => void, hasPrev: boolean, label: string) => sliderArrow(clickHandler, hasPrev, label)}
          renderArrowNext={(clickHandler: () => void, hasPrev: boolean, label: string) => sliderArrow(clickHandler, hasPrev, label, true)}
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={40}
        >
          {!loading && data.bigBanner.imagesData.length > 1 && data.bigBanner.imagesData.map((slider: IPlainImageSlide) => (
            <a href={slider.redirection} key={slider.alt}>
              <SliderWrapper $color={slider.color} $imageSrc={isSM ? slider.mobile_src : slider.src}>
                <PlainImage alt={slider.alt} src={isSM ? slider.mobile_src : slider.src} />
              </SliderWrapper>
            </a>
          ))}
        </Carousel>
      }
      {
        !loading && data.bigBanner.imagesData.length == 1 &&
        <>
          {data.bigBanner.imagesData.map((slider: IPlainImageSlide) => (
            <a key={slider.alt} href={slider.redirection}>
              <SliderWrapper $color={slider.color} $imageSrc={isSM ? slider.mobile_src : slider.src} />
            </a>
          ))}
        </>
      }
    </SliderContainer>
  );
};
export default SliderBigBanner;
import { BackButton, BannerSubtitle, BannerTitle, Button, ButtonWrapper, LCPImage, PlainImage, SliderContainer, SliderWrapper, Wrapper } from './SliderBigBannerCss'
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
      <LCPImage width="99999" height="99999"  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"/>
    </SliderContainer>
  );
};
export default SliderBigBanner;
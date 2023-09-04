

import React, { useState, useRef, useEffect } from 'react';
import { CarouselContainer, CarouselInner,  } from './CarrouselCss'
import PaymentMethodUnit from '../PaymentMethodUnit/PaymentMethodUnit';

interface IProps {
  items: {
    link: string;
    method: string;
    description: string;
  }[]
}

const Carousel = ({items}: IProps) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (event: any) => {
    setIsDragging(true);
    setDragStartX(event.clientX);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const dragOffset = event.clientX - dragStartX;
      const dragDistance = Math.round(dragOffset / containerWidth);

      setCurrentImage((prevImage) => {
        const newImageIndex = prevImage - dragDistance;
        return Math.max(0, Math.min(newImageIndex, items.length - 1));
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === items.length - 1 ? 0 : prevImage + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [items.length]);

  return (
    <CarouselContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >

      <CarouselInner $totalItems={items.length} $currentImage={currentImage}>
      {items.map((item) => (
        <PaymentMethodUnit
          key={item.method}
          linkImg={item.link}
          method={item.method}
          description={item.description}
        />
      ))}

      </CarouselInner>
    </CarouselContainer>
  );
};

export default Carousel;

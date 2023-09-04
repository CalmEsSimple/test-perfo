import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  user-select: none;
`;

interface CarouselImageProps {
    $totalItems: number;
    $currentImage: number;
  }

  export const CarouselInner = styled.div<CarouselImageProps>`
  display: flex;
  width: ${({ $totalItems }) => `${$totalItems * 100}%`};
  transition: transform 0.6s ease;
  transform: ${({ $currentImage, $totalItems }) => `translateX(-${$currentImage * (100 / $totalItems)}%)`};
`;

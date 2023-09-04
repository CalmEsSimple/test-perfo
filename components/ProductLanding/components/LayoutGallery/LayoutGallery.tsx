import { ColumnWrapper, LayoutImg, LayoutImgWrapper, LayoutVideo, RowWrapper, Wrapper } from "./styled";

export const LayoutGallery = ({images, isSquare, layoutImagesHaveVideo}: {images: string[], isSquare?: boolean, layoutImagesHaveVideo?: boolean}) => {
  return (
    <Wrapper>
      {isSquare ? (
        <>
          <RowWrapper>
            <ColumnWrapper>
              <LayoutImgWrapper>
                <LayoutImg src={images[0]} alt="Imagen 1" data-src={images[0]} />
              </LayoutImgWrapper>
            </ColumnWrapper>
            <ColumnWrapper>
              <LayoutImgWrapper>
                {layoutImagesHaveVideo ? 
                  <LayoutVideo src={images[1]} autoPlay loop muted playsInline data-src={images[1]} /> :
                  <LayoutImg src={images[1]} alt="Imagen 3" data-src={images[1]} />
                }
              </LayoutImgWrapper>
            </ColumnWrapper>
          </RowWrapper>
          <RowWrapper>
            <ColumnWrapper>
              <LayoutImgWrapper>
                <LayoutImg src={images[2]} alt="Imagen 3" data-src={images[2]} />
              </LayoutImgWrapper>
            </ColumnWrapper>
            <ColumnWrapper>
              <LayoutImgWrapper>
              <LayoutImg src={images[3]} alt="Imagen 4" data-src={images[3]} />
              </LayoutImgWrapper>
            </ColumnWrapper>
          </RowWrapper>
        </>
      ) : 
        <>
          <RowWrapper>
            <ColumnWrapper $onlyChild>
              <LayoutImgWrapper>
                <LayoutImg src={images[0]} alt="Imagen 1" data-src={images[0]} />
              </LayoutImgWrapper>
            </ColumnWrapper>
          </RowWrapper>
          <RowWrapper>
            <ColumnWrapper>
              <LayoutImgWrapper>
                <LayoutImg src={images[1]} alt="Imagen 2" data-src={images[1]}/>
              </LayoutImgWrapper>
            </ColumnWrapper>
            <ColumnWrapper $multipleRow>
              <LayoutImgWrapper>
              <LayoutImg src={images[2]} alt="Imagen 3" data-src={images[2]} />
              </LayoutImgWrapper>
              <LayoutImgWrapper>
                <LayoutImg src={images[3]} alt="Imagen 4" data-src={images[3]} />
              </LayoutImgWrapper>
            </ColumnWrapper>
          </RowWrapper>
        </>
      }
    </Wrapper>
  );
};
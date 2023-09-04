import  { useState } from 'react';
import {
  ContainerComponent,
  Container,
  TitleContainer,
  Title,
  Description,
  Iframe,
  VideoImage,
  BoldTitle,
  BoldDescription,
  VideoWrapper,
} from './styled';
import { LandingContent } from '../../styled';

interface IProps {
  thumbnail?: string
  videoId: string
  isCombo?: boolean
}

export const Unboxing = ({ thumbnail, videoId, isCombo }: IProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <ContainerComponent>
      <LandingContent>
        <Container>
          <TitleContainer>
            <Title>
              { isCombo ? <BoldTitle $isCombo>armalo en menos de 15 minutos</BoldTitle> : <><BoldTitle>unboxing</BoldTitle> calm</>}
            </Title>
            {!isCombo && <Description>compartí el tuyo en redes usando</Description>}
            <BoldDescription>{isCombo ? "así se arma nuestra base, es simple." : "#unboxingcalm"}</BoldDescription>
          </TitleContainer>
          <VideoWrapper>
            {!thumbnail || showVideo ? (
              <Iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></Iframe>
            ) : (
              <VideoImage
                src={thumbnail}
                onClick={() => setShowVideo(true)}
              />
            )}
          </VideoWrapper>
        </Container>
      </LandingContent>
    </ContainerComponent>
  );
};
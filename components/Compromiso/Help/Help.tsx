import {
  DivHelp,
  DivCards,
  Card,
  DivContainerCard,
  DivImageCard,
  ImageCard,
  DivTextCard,
  ContainerCarrousel,
  TextCardViolet,
  TitleCardViolet
} from "./HelpCss";
import { IProps } from "./types";
import parse from "html-react-parser";
import Carrousel from "./carouselHelp/Carousel";
import { useWidth } from "@/hooks/useWidth";
import { deviceSizes } from "@/utils/Theme";

const Help = ({ cards, Title, Text, background, carousel }: IProps) => {
  const width = useWidth();
  return (
    <DivHelp>
      <DivCards carousel={carousel}>
        {width <= deviceSizes.mobile && carousel ? (
          <ContainerCarrousel>
            <Carrousel
              Title={Title}
              Text={Text}
              cards={cards}
              background="pickUp"
              carousel={true}
            />
          </ContainerCarrousel>
        ) : (
          cards.map((card, index) => (
            <Card key={index} background={background} carousel={carousel}>
              <DivContainerCard carousel={carousel}>
                <DivImageCard carousel={carousel}>
                  <ImageCard carousel={carousel} src={card.img.url} alt={card.img.alt} />
                </DivImageCard>
                <DivTextCard carousel={carousel}>
                { Title ? <Title>{card.step}</Title> : <TitleCardViolet>{card.step}</TitleCardViolet> }
                { Text ? <Text>{parse(card.text)}</Text> : <TextCardViolet>{parse(card.text)}</TextCardViolet>}
                </DivTextCard>
              </DivContainerCard>
            </Card>
          ))
        )}
      </DivCards>
    </DivHelp>
  );
};

export default Help;

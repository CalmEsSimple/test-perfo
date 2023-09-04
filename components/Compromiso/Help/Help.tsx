import { useWidth } from "@/hooks/useWidth";
import {
  DivHelp,
  DivDonate,
  TextDonate,
  TitleDonate,
  DivCards,
  Card,
  ImageCard,
  TextCard,
  TitleCard,
  DivTextCard,
  DivImageCard,
  DivContainerCard,
  TextCommitment,
  DivCardsViolet,
  CardViolet,
  ImageCardViolet,
  TextCardViolet,
  TitleCardViolet,
  DivTextCardViolet,
  DivImageCardViolet,
  DivContainerCardViolet,
  WordDonated
} from "./HelpCss";
import { IProps } from "./types";
import parse from 'html-react-parser'; 

const Help = ({ cards, isCompromiso }: IProps) => {
  const width = useWidth();
  const breakpoint = 768;
  return (
    
    <DivHelp>
      {isCompromiso?(
      <DivDonate id="pasos">
        {width > breakpoint ? (
          <TextDonate>
            Tenemos una propuesta para vos: el colchón que ya no vas a usar,{" "}
            <br />
            tu ex colchón, lo podés donar y nosotrxs nos encargamos de buscarle
            <br />
            un nuevo hogar para que alguien más pueda descansar mejor.
          </TextDonate>
        ) : (
          <TextDonate>
            Tenemos una propuesta para vos: el colchón que ya no vas a usar, tu
            ex colchón, lo podés donar y nosotrxs nos encargamos de buscarle un
            nuevo hogar para que alguien más pueda descansar mejor.
          </TextDonate>
        )}
        <TextCommitment>#CompromisoDescansadxs ✨</TextCommitment>
      <TitleDonate>¿Cómo hago para ayudar?</TitleDonate>
    </DivDonate>

      ):null}
{isCompromiso ? (
      <DivCards>
        {cards.map((card, index) => (
            <Card key={index}>
          <DivContainerCard>
            <DivImageCard>
              <ImageCard src={card.img.url} alt={card.img.alt} />
            </DivImageCard>
            <DivTextCard>
              <TitleCard>{card.step}</TitleCard>
              <TextCard>{parse(card.text)}</TextCard>
            </DivTextCard>
          </DivContainerCard>
        </Card>
))}
      </DivCards>
) : (
        <DivCardsViolet>
          {cards.map((card, index) => (
            <CardViolet key={index}>
              <DivContainerCardViolet>
                <DivImageCardViolet>
                  <ImageCardViolet src={card.img.url} alt={card.img.alt} />
                </DivImageCardViolet>
                <DivTextCardViolet>
                  <TitleCardViolet>{card.step}</TitleCardViolet>
                  <TextCardViolet>{parse(card.text)}</TextCardViolet>
                </DivTextCardViolet>
              </DivContainerCardViolet>
            </CardViolet>
          ))}
        </DivCardsViolet>
      )}
    </DivHelp>
  );
};

export default Help;

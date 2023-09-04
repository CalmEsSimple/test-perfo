import Bed from "../Bed/Bed";
import { IProps } from "./types";
import { useQuery } from "@apollo/client";
import parse from "html-react-parser";
import { getTyCPromotion } from "@/utils/hygraphHelper";
import {
  DivTerms,
  TitleTerms,
  PromoBox,
  CardsPromotionContainer,
  TitleTyCPromosCard,
  TextSmallCards,
} from "./InformationTyCPromosCSS";

const InformationTyCPromos = ({
  info = "cllijf16gn85w0aiw9h8qim2a",
}: IProps) => {
  const { loading, data } = useQuery(getTyCPromotion, {
    variables: { id: info },
  });

  interface TextPromo {
    __typename: string;
    promo: string;
    title: string;
    subtitle: string;
  }

  return (
    <>
      <DivTerms>
        <TitleTerms>Términos y condiciones de promociones</TitleTerms>
        <CardsPromotionContainer>
          {!loading ? (
            data.tyCPromotion.promotionData.map((text: TextPromo) => {
              const parsedSubtitle = parse(text.subtitle);
              return (
                <PromoBox key={text.title}>
                  <TitleTyCPromosCard $isYellowTitle={true}>
                    {text.title}
                  </TitleTyCPromosCard>
                  <TextSmallCards $isYellowTitle={false}>
                    {parsedSubtitle}
                  </TextSmallCards>
                </PromoBox>
              );
            })
          ) : (
            <></>
          )}
        </CardsPromotionContainer>
      </DivTerms>
      <Bed></Bed>
    </>
  );
};

export default InformationTyCPromos;

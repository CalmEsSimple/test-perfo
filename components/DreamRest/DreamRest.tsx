import PillOfferProduct from "../PillOfferProduct/PillOfferProduct";
import {
  DivDreamRest,
  TitleDreamRest,
  DivImages,
  ColumnImages,
  RowImages,
  FirstColumn,
  SecondColumn,
  FirstRow,
  SecondRow,
  OfferTextRow,
  OfferTextColumn,
  TitleOfferText,
  Img,
  DivImg,
  Bold,
  LineBreak,
  DivPill
} from "./DreamRestCss";
<script src="https://widget.reviews.io/polaris/build.js"></script>;

const DreamRest = () => {
  return (
    <DivDreamRest>
      <TitleDreamRest>
        encontrá tu <LineBreak></LineBreak><Bold>descanso soñado</Bold>.
      </TitleDreamRest>
      <DivImages>
        <RowImages>
          <FirstRow href={process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + "/colchones"}>
            <DivImg>
              <Img
                data-src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/90892417-c12a-48e9-ee16-a83450c1ed00/fit=scale-down"
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/90892417-c12a-48e9-ee16-a83450c1ed00/fit=scale-down"
                alt="colchon calm"
                className="lazyload"
              />
            </DivImg>
            <DivPill>
              <PillOfferProduct isCategoriesSection pillId="clko1as59sp7j0bk8075b7b2p" />
              <TitleOfferText>colchón calm</TitleOfferText>
            </DivPill>
          </FirstRow>

          <SecondRow href={process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + "/bases"}>
            <DivImg>
              <Img
                data-src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8fd40189-cf08-44f0-7476-0d606611d900/fit=scale-down"
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8fd40189-cf08-44f0-7476-0d606611d900/fit=scale-down"
                alt="bases"
                className="lazyload"
              />
              <DivPill>
                <PillOfferProduct isCategoriesSection pillId="clko1bb33spa00bk8ouxc4a3e" />
                <TitleOfferText>bases</TitleOfferText>
              </DivPill>
            </DivImg>
          </SecondRow>
        </RowImages>
        <ColumnImages>
          <FirstColumn href={process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + "/almohadas"}>
            <DivImg>
              <Img
                data-src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/40b10026-960c-4a32-6045-85c6c3f22a00/fit=scale-down"
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/40b10026-960c-4a32-6045-85c6c3f22a00/fit=scale-down"
                alt="almohadas"
                className="lazyload"
              />
            <DivPill>
              <PillOfferProduct isCategoriesSection pillId="clko19hzysovg0bk8gx9vhq28" />
              <TitleOfferText>almohadas</TitleOfferText>
            </DivPill>
            </DivImg>
          </FirstColumn>
          <SecondColumn href={process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + "/ropa-de-cama"}>
            <DivImg>
              <Img
                data-src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/7879f78f-c7f3-46c5-be3a-9d7ad9e84300/fit=scale-down"
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/7879f78f-c7f3-46c5-be3a-9d7ad9e84300/fit=scale-down"
                alt="ropa de camas"
                className="lazyload"
              />
            </DivImg>
            <DivPill>
              <PillOfferProduct isCategoriesSection pillId="clko1abbk95dr0bk0egld0lyj" />
              <TitleOfferText>ropa de cama</TitleOfferText>
            </DivPill>
          </SecondColumn>
        </ColumnImages>
      </DivImages>
    </DivDreamRest>
  );
};

export default DreamRest;

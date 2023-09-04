import { productURLRedirectionByURL } from "@/utils/productURLById";
import RelatedProductUnit from "./RelatedProductUnit";
import {
  DivRest,
  TitleRest,
  Bold,
  DivScroll,
  DivCategories,
  DivAlwaysScroll,
  DivCategoriesMobile,
  DivRestMobile,
  LineBreak
} from "./styled";
import { IProps } from "./types";
import { useWidth } from "@/hooks/useWidth";
import { deviceSizes } from "@/utils/Theme";

const RelatedProducts = ({
  relatedItems,
  title = '',
  boldTitle = '',
  isYellowTitle,
  isMobile,
  fromCart,
  fromProduct
}: IProps) => {

  const width = useWidth();
  const isSM = isMobile ? true : width < deviceSizes.mobile

  return (
    <>
      {isSM ? (
        <DivRestMobile>
          {
            title !== '' && boldTitle !== '' ?
              (
                <TitleRest $isYellowTitle={isYellowTitle}>
                  {title}
                  <LineBreak></LineBreak><Bold> {boldTitle}</Bold>
                </TitleRest>
              ) :
              <></>
          }

          <DivAlwaysScroll>
            <DivCategoriesMobile $fromCart={fromCart}>
              {relatedItems && relatedItems.map((Item) => (
                  <RelatedProductUnit
                    key={Item.name}
                    id_item={Item.id_prod}
                    fromCart={fromCart}
                    img={Item.image}
                    name={fromCart ? Item.name_parent : Item.name}
                    price={Item.price ? Item.price : 0}
                    regular_price={Item.regular_price ? Item.regular_price : 0}
                    variations={Item.attributes}
                    offer={Item.discount?.toString()}
                    link={productURLRedirectionByURL(fromCart ? Item.id_parent : Item.id_prod)}
                  />
              ))}
            </DivCategoriesMobile>
          </DivAlwaysScroll>
        </DivRestMobile>
      ) : (
        <DivRest $fromProduct={fromProduct}>
          <TitleRest $isYellowTitle={isYellowTitle}>
            {title}
            <Bold> {boldTitle}</Bold>
          </TitleRest>
          <DivScroll>
            <DivCategories>
              {relatedItems && relatedItems.map((Item) => (
                <RelatedProductUnit
                  key={Item.name}
                  fromCart={fromCart}
                  img={Item.image}
                  name={Item.name}
                  price={Item.price ? Item.price : 0}
                  regular_price={Item.regular_price ? Item.regular_price : 0}
                  variations={Item.attributes}
                  offer={Item.discount?.toString()}
                  link={productURLRedirectionByURL(Item.id_prod)}
                />
              ))}
            </DivCategories>
          </DivScroll>
        </DivRest>
      )}
    </>
  );
};

export default RelatedProducts;

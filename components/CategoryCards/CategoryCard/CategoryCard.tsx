import { IProduct } from "@/state/products/types";
import {
  DivUnit,
  Name,
  Description,
  PriceStrikeThrough,
  DivPrice,
  Price,
  TextCuotas,
  ImageN,
} from "./CategoryCardCss";
import { productURLRedirectionByURL } from "@/utils/productURLById";
import PillOfferProduct from "@/components/PillOfferProduct/PillOfferProduct";
import { formatNumber } from "@/utils/formatPrices";

const CategoryCard = ({ item, installments, splitCharacter }: { item: IProduct, installments: number, splitCharacter?: string }) => {

  const cuotasPrice = Math.ceil((item.price) / installments)
  const arrayName = item.name.split(splitCharacter ? splitCharacter : " ");
  return (
    <DivUnit>
      <a href={productURLRedirectionByURL(item.id_prod ? item.id_prod : item.id_parent)}>
        {item.discount && <PillOfferProduct pillId={item.discount as string} isRelatedProducts />}

        <ImageN
          src={item.image}
          alt={item.name}
        />
      </a>
      <Name>{arrayName[0]}</Name>
      <Description>{arrayName.splice(1).join(" ")}</Description>

      <DivPrice>
        {item.price == 0 ? (
          <div>
            <Price>${formatNumber(item.regular_price)}</Price>
          </div>
        ) : (
          <div>
            <PriceStrikeThrough>${formatNumber(item.regular_price)}</PriceStrikeThrough> <br />
            <Price>${formatNumber(item.price)}</Price>
          </div>
        )}
      </DivPrice>
      {installments > 0 && <TextCuotas>{installments} cuotas sin interés de <b>${formatNumber(cuotasPrice)}</b></TextCuotas>}
    </DivUnit>
  );
};

export default CategoryCard;

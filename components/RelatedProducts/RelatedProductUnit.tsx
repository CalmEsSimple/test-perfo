import { useDispatch, useSelector } from "react-redux";
import variations_products from "@/utils/variations_products";
import { formatNumber } from "@/utils/formatPrices";
import {
  DivUnit,
  Img,
  Link,
  TitleUnit,
  TitleUnitBold,
  From,
  Price,
  OfferPrice,
  Props,
  Article,
  AddToCart,
} from "./styled";
import { onAddItemToCart, onUpdateItemFromCart } from "@/state/cart/cartActions";
import { IProps } from "./typesUnit";
import PillOfferProduct from "../PillOfferProduct/PillOfferProduct";
import { getLoadingAddToCart } from "@/state/loading/loadingSelector";
import { IStore } from "@/state/types";
import Spinner from "../Spinner/Spinner";
import { getCartData } from "@/state/cart/cartSelector";

const RelatedProductUnit = ({
  img,
  name,
  regular_price,
  offer,
  price,
  link,
  variations,
  fromCart,
  id_item
}: IProps) => {
  const loadingAddToCart = useSelector(getLoadingAddToCart)
  const cartData = useSelector(getCartData)
  const dispatch = useDispatch();

  const addToCart = () => {
    if (id_item && !loadingAddToCart) {
      const itemInCart = cartData?.items.find(item => item.id.toString() == id_item)
      if(itemInCart) {
        const key = itemInCart.key
        const qty = itemInCart.quantity + 1
        dispatch(onUpdateItemFromCart(key, qty))
      } else {
        dispatch(onAddItemToCart(parseInt(id_item), 1));
      }
    }
  }

  const returnConditionalRegularPrice = () => {
    return (
      regular_price == 0 ? (
        <>
          <From>desde:</From>
          <p>
            <OfferPrice>${formatNumber(price)}</OfferPrice>
          </p>
        </>
      ) : (
        <>
          <From>
            desde:
            <Price> ${formatNumber(regular_price)}</Price>
          </From>
          <p>
            <OfferPrice>${formatNumber(price)}</OfferPrice>
          </p>
        </>
      )
    )
  }

  const arrayName = name.split(" ");
  return (
    <Article>
      <DivUnit>
        {offer && <PillOfferProduct pillId={offer} isRelatedProducts />}

        <Link href={link}>
          <Img fill={true} data-src={img} src={img} alt={name} className="lazyload" $fromCart={fromCart} />
        </Link>

        {
          fromCart ?
            <TitleUnitBold $fromCart={fromCart}>{name}</TitleUnitBold>
            :
            <>
              <TitleUnit>{arrayName[0]}</TitleUnit>
              <TitleUnitBold>{arrayName.splice(1).join(" ")}</TitleUnitBold>
            </>
        }

        <Props>
          {
            Object.keys(variations).map((at, index) => (
              <span key={at}>
             { `${variations_products[variations[at as keyof typeof variations] as keyof typeof variations_products].trim()}${Object.keys(variations).length - 1 == index ? "" : ", "}`}
             </span>
            ))}
        </Props>

        {
          fromCart ?
            <p>
              <OfferPrice $fromCart={fromCart}>${formatNumber(price)}</OfferPrice>
            </p>

            :

            returnConditionalRegularPrice()
        }

      </DivUnit>

      {
        fromCart &&
          (
            <>
              <AddToCart onClick={addToCart} >{loadingAddToCart ? <Spinner /> : "+"}</AddToCart>
            </>
          )
      }

    </Article>
  );
};


export default RelatedProductUnit;

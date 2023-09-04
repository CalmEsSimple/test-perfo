import { useState, useEffect } from "react";
import {
  DivColchon,
  DivCalm,
  DivEmpty,
  TitleCalm,
  Buttoncalm,
  DivContent,
  TextCuotas,
  FromText,
  Price,
  PriceLine,
  DivText,
  DivButton,
  DivButtonInfoExtra,
  ListInfoExtra,
  TitleBoldCalm,
} from "./ColchonCss";
import ExtraInfo from "./ExtraInfo/ExtraInfo";
import childrenRedirections from "./childrenRedirections.json";
import { useWidth } from "@/hooks/useWidth";
import { deviceSizes } from "@/utils/Theme";
import { useDispatch, useSelector } from "react-redux";
import { onGetProduct } from "@/state/products/productsActions";
import { getProductsData } from "@/state/products/productsSelector";
import { IStore } from "@/state/types";
import { IChildrenProd, IProduct } from "@/state/products/types";
import PillOfferProduct from "../PillOfferProduct/PillOfferProduct";
import { formatNumber } from "@/utils/formatPrices";

const Colchon = () => {
  const productsData = useSelector((state: IStore) => getProductsData(state));
  const dispatch = useDispatch();
  const [showInfo, setShowInfo] = useState(false);
  const [product, setProduct] = useState<IProduct | undefined>();
  const [lowestChild, setLowestChild] = useState<IChildrenProd | undefined>();
  const width = useWidth();

  const selectedProduct = "334";
  const mobileView =
    width > deviceSizes.mobile
      ? {
          iconColor: "#FFF",
          iconSize: { width: "35", height: "26" },
        }
      : {
          iconColor: "#303030",
          iconSize: { width: "20", height: "20" },
        };

  useEffect(() => {
    if (
      !productsData ||
      productsData.every((product) => product.id !== selectedProduct)
    ) {
      dispatch(onGetProduct(selectedProduct));
    }
  }, []);

  useEffect(() => {
    setProduct(productsData?.find((product) => product.id == selectedProduct));
  }, [productsData]);

  useEffect(() => {
    setLowestChild(product?.children.find(child => child.price == product.price))
  }, [product]);

  return (
    <DivColchon>
      <DivCalm $showInfo={showInfo}>
        <DivContent $showInfo={showInfo}>
          <DivText>
            {product?.discount_pill && (
              <PillOfferProduct
                pillId={product.discount_pill}
                isFeatureProduct
              />
            )}
            <TitleCalm>
              {product?.name.split(" ")[0]}{" "}
              <TitleBoldCalm>{product?.name.split(" ")[1]}</TitleBoldCalm>
            </TitleCalm>
            <>
              <FromText>desde:</FromText>
              {product?.regular_price && (
                <PriceLine>{product?.regular_price}</PriceLine>
              )}
              {product?.price && <Price>${formatNumber(product.price)}</Price>}
              {lowestChild && <PriceLine>${formatNumber(lowestChild.regular_price)}</PriceLine>}
              <svg
                id="btn-mas"
                onClick={() => setShowInfo((prev) => !prev)}
                width={mobileView.iconSize.width}
                height={mobileView.iconSize.height}
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                cursor="pointer"
              >
                <g id="BotÃ³n+CÃ­rculo">
                  <path
                    id="circulito"
                    d="M22.1316 42.2632C33.2499 42.2632 42.2632 33.2499 42.2632 22.1316C42.2632 11.0132 33.2499 2 22.1316 2C11.0132 2 2 11.0132 2 22.1316C2 33.2499 11.0132 42.2632 22.1316 42.2632Z"
                    stroke={mobileView.iconColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="mas"
                    d="M22.1316 14.0786V30.1839"
                    stroke={mobileView.iconColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    display={showInfo ? "none" : "block"}
                  ></path>
                  <path
                    id="menos"
                    d="M14.079 22.1316H30.1842"
                    stroke={mobileView.iconColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </>
            {showInfo ? (
              <DivButtonInfoExtra>
                <ListInfoExtra>
                  {product &&
                    product.children
                      .filter(
                        (item) => item.attributes["pa_alto"] == "original"
                      )
                      .sort((a, b) => a.price - b.price)
                      .map((item) => (
                        <ExtraInfo
                          key={item.id}
                          sizesText={item.name.split(" - ")[1].split(",")[0]}
                          sizesPrice={formatNumber(item.price)}
                          sizeLinePrice={formatNumber(item.regular_price)}
                          sizelink={
                            childrenRedirections[
                              item.id as keyof typeof childrenRedirections
                            ]
                          }
                        />
                      ))}
                </ListInfoExtra>
              </DivButtonInfoExtra>
            ) : (
              <>
                {product && (
                  <TextCuotas>
                    {product.installments} cuotas de: $
                    {formatNumber(
                      Math.ceil(product.price / product.installments)
                    )}
                  </TextCuotas>
                )}
              </>
            )}
          </DivText>
          <DivButton>
            <Buttoncalm href="https://calmessimple.com.ar/producto/colchon-calm/">
              ¡Lo quiero!
            </Buttoncalm>
          </DivButton>
        </DivContent>
      </DivCalm>
      <DivEmpty></DivEmpty>
    </DivColchon>
  );
};

export default Colchon;

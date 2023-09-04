import CounterQty from "../CounterQty/CounterQty"
import { CardCart } from "./styled"
import { IProps } from "./types"
import { formatNumber } from "@/utils/formatPrices"
import { useDispatch } from "react-redux";
import { onUpdateItemFromCart } from "@/state/cart/cartActions";
import { Content, Wrapper } from "../LoadingDiv/styled"
import variations_products from "@/utils/variations_products"
import type {} from 'redux-thunk/extend-redux';

export const CardSidecart = ({ keyItem, quantity, quantity_limit, name, totals, regular_price, imageSrc, removeItem, variations, isChange, isDelete, isCpCalc, isAddCoupon }: IProps) => {

    const imgGeneric = 'https://di-sitebuilder-assets.s3.amazonaws.com/generic-placeholder.png';

    const regularPrice = parseInt(regular_price);
    const subtotalPrice = parseInt(totals.line_subtotal);
    const totalRegPrice = regularPrice * quantity;
    const dispatch = useDispatch();

    const updateItem = (quantity: number) => {
        dispatch(onUpdateItemFromCart(keyItem, quantity));
    }

    return (
        <CardCart>
            <img
                src={imageSrc ? imageSrc.src : imgGeneric}
                className="cart-img"
                alt={imageSrc ? imageSrc.name : "Producto sin imagen"}
            />

            <h3 className="product-name">{name}</h3>

            {
                <p className="p-variation">
                    {
                        Object.keys(variations.attributes).map((at, index) => (
                            <span key={at}>
                                {
                                    variations_products[variations.attributes[at as keyof typeof variations.attributes] as keyof typeof variations_products] &&
                                    `${variations_products[variations.attributes[at as keyof typeof variations.attributes] as keyof typeof variations_products].trim()}${Object.keys(variations.attributes).length - 1 == index ? "" : ", "}`
                                }
                            </span>
                        ))}

                </p>
            }

            <div className="product-counter">
                <div>
                <CounterQty
                    qtyMax={quantity_limit}
                    quantity={quantity}
                    updateItem={updateItem}
                    backorder
                    isChange={isChange}
                    isDelete={isDelete}
                    isCpCalc={isCpCalc}
                    isAddCoupon={isAddCoupon}
                />
                </div>
            </div>

            <div className="section-prices-container">
                <Wrapper>
                    {
                        isChange || isDelete || isCpCalc ?
                            <Content>
                                <>
                                    <p className="product-price" style={{ width: '80px', height: '17px' }}></p>
                                </>
                            </Content>
                            :

                            <>
                                {
                                    totalRegPrice === subtotalPrice ?

                                        <>
                                            <p className="product-price">${formatNumber(totalRegPrice)}</p>
                                        </>

                                        :
                                        <>
                                            <p className="product-reg-price">${formatNumber(totalRegPrice)}</p>
                                            <p className="product-price disc-price">${formatNumber(subtotalPrice)}</p>
                                        </>
                                }
                            </>

                    }

                </Wrapper>
            </div>

            {
                isChange || isDelete || isCpCalc ?
                    <button
                        title='Eliminar producto'
                        aria-label="Eliminar producto"
                        disabled
                        className="product-delete-disabled">
                        <img
                            className="product-delete-img"
                            alt='Icono de eliminar producto' src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/e2550a75-61c1-4ed8-97ad-deea13f59e00/fit=scale-down"
                        />

                    </button>
                    :
                    <button
                        title='Eliminar producto'
                        aria-label="Eliminar producto"
                        onClick={() => removeItem(keyItem)}
                        className="product-delete">
                        <img
                            className="product-delete-img"
                            alt='Icono de eliminar producto' src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/377bc4d8-bcc7-494f-926b-e814a73da300/fit=scale-down"
                        />
                    </button>
            }
        </CardCart>
    )

}
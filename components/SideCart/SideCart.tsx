import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    onGetCart, onRemoveItemFromCart,
    // onClearCart,
    onAddCouponToCart, onRemoveCouponFromCart, onUpdateShippingFromCart, onGetCartRelatedProducts, onGetVariation
} from "@/state/cart/cartActions";
import Modal from "../ModalSidecart/Modal";
import { CardSidecart } from "../CardSidecart/CardSidecart";
import { IStore } from "@/state/types";
import {
    BtnLinkCart, ButtonDisabled,
    // ButtonEmptyCart, 
    DivSideCart, DivTotals, ErrorP, PEmptyCart, PLoadingSubTotal, PLoadingTotal, SectionCards, TitleRelatedProducts
} from "./styled";
import { formatNumber } from "@/utils/formatPrices";
import BannerSidecart from "../BannerSidecart/BannerSidecart";
import ShippingCalc from "../ShippingCalc/ShippingCalc";
import { Content, Wrapper } from "../LoadingDiv/styled";
import { IVariation } from "@/state/cart/types";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { getCartCurrentProductsRelated, getCartData, getCartError, getDescriptionCoupons, getShippingCost, getSubtotalPrice, getSubtotalPriceDiscount, getTotalPrice, getVariationsData } from "@/state/cart/cartSelector";
import { getLoadingValues } from "@/state/loading/loadingSelector";
import Spinner from "../Spinner/Spinner";
import Image from "next/image";

interface IProps {
    isOpen: boolean | (() => void);
    openCart: () => void;
    closeCart: () => void;
}

const SideCart = ({ isOpen, openCart, closeCart }: IProps) => {
    const dispatch = useDispatch();
    const shippingCost = useSelector((state: IStore) => getShippingCost(state));
    const cartError = useSelector((state: IStore) => getCartError(state));
    const cartData = useSelector((state: IStore) => getCartData(state));
    const variationsData = useSelector((state: IStore) => getVariationsData(state));
    const currentProductsRelated = useSelector((state: IStore) => getCartCurrentProductsRelated(state));
    const loading = useSelector((state: IStore) => getLoadingValues(state));
    const descriptionCoupons = useSelector((state: IStore) => getDescriptionCoupons(state));

    const [isCartLoaded, setIsCartLoaded] = useState(false);
    const [urlCouponAdded, setURLCouponAdded] = useState(false);
    const [errCoupon, setErrCoupon] = useState('')

    const totalPrice = parseInt(useSelector((state: IStore) => getTotalPrice(state)));
    const subtotalPrice = parseInt(useSelector((state: IStore) => getSubtotalPrice(state)));
    const subtotalPriceDiscount = parseInt(useSelector((state: IStore) => getSubtotalPriceDiscount(state)));

    const [coupon, setCoupon] = useState("");
    const [openCoupon, setOpenCoupon] = useState(false);
    const [urlCoupon, setURLCoupon] = useState<string | null>()


    useEffect(() => {
        if (cartError.error && cartError.errorDetail) {
            setErrCoupon(cartError.errorDetail)

            setTimeout(() => {
                setErrCoupon('');
            }, 3000);
        }
    }, [cartError.errorDetail]);

    useEffect(() => {
        if (!cartData) {
            dispatch(onGetCart())
        }
        if(window) {
            const queryParameters = new URLSearchParams(window.location.search)
            setURLCoupon(queryParameters.get("coupon"))
        }
    }, []);

    useEffect(() => {
        if (!isCartLoaded && cartData) {
            setIsCartLoaded(true)
        }
    }, [cartData]);

    useEffect(() => {
        if (urlCoupon && isCartLoaded && !urlCouponAdded) {
            dispatch(onAddCouponToCart(urlCoupon))
            openCart()
            setURLCouponAdded(true)
        }
    }, [isCartLoaded]);

    useEffect(() => {
        if (cartData && cartData.items_count > 0) {
            dispatch(onGetCartRelatedProducts(cartData.items.map(i => i.id.toString())));
        }

        if (cartData?.items) {

            const { items } = cartData;

            items.forEach((item) => {

                let child: IVariation | null = null;

                if (variationsData) {

                    const foundChild = variationsData.find(prod => prod.id == item.id)

                    if (foundChild) child = foundChild;

                }

                if (!child) {
                    dispatch(onGetVariation(item.id.toString()));
                }

            });

        }

    }, [cartData]);

    // const clearCart = () => {
    //     const items = cartData?.items.map(item => ({ key: item.key })) ?? [];
    //     dispatch(onClearCart(items));
    // };

    const onAddCoupon = () => {
        if (coupon !== "") {
            dispatch(onAddCouponToCart(coupon))
            setCoupon("");
        }
    }

    const removeCoupon = (code: string) => {
        dispatch(onRemoveCouponFromCart(code));
    }

    const toggleCoupon = () => {
        setOpenCoupon(!openCoupon);
    }

    const renderCoupons = () => {
        if (cartData?.coupons.length === 0) {
            return null;
        }

        return (
            <ul className="ul-added-coupons">
                {descriptionCoupons && cartData?.coupons.map(coupon => (

                    <li key={coupon.code} className="li-added-coupon">

                        <span className="span-coupon">

                            {descriptionCoupons[coupon.code]?.toUpperCase() || coupon.code.toUpperCase()}

                            {
                                coupon.totals.total_discount !== "0" ?
                                    <button
                                        className={`btn-delete-added-coupon${loading.loadingAddCoupon || loading.loadingDeleteCoupon ? "-disabled" : ''}`}
                                        disabled={loading.loadingAddCoupon ?? loading.loadingDeleteCoupon}
                                        title={`Borrar cupón ${coupon.code}`}
                                        aria-label={`Borrar cupón ${coupon.code}`}
                                        onClick={() => removeCoupon(coupon.code)}
                                    >
                                        <Image fill={true} src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/527083b1-56bb-4a75-1a98-e7cffd083800/thumbnail" alt="Borrar cupón" />
                                    </button> : <></>
                            }


                        </span>

                        {
                            coupon.totals.total_discount !== "0" ?
                                <p className="coupon-discount">
                                    - ${formatNumber(parseFloat(coupon.totals.total_discount))}
                                </p> : ""
                        }
                    </li>
                ))
                }
            </ul >
        )
    }

    const renderTotals = () => {
        if (!cartData?.items || cartData.items.length === 0) {
            return null
        }

        return (
            <>
                
                <DivTotals>
                    <section className="section-subtotal">
                        <span className="span-totals">
                            <p>Subtotal</p>
                            <Wrapper>
                                {
                                    loading.loadingUpdateToCart ?
                                        <Content>
                                            <PLoadingSubTotal />
                                        </Content> :
                                        <p>
                                            ${subtotalPrice ? formatNumber(subtotalPrice - subtotalPriceDiscount) : 0}
                                        </p>
                                }
                            </Wrapper>

                        </span>
                        <ShippingCalc
                            totalShipping={shippingCost}
                            updateShipping={(postcode: string) =>
                                dispatch(onUpdateShippingFromCart(postcode))
                            }
                            isCpCalc={loading.loadingCalcShippingCost}
                        />
                    </section>

                    <hr />
                    <span className="span-totals span-total">
                        <p>TOTAL</p>
                        <Wrapper>

                            {
                                loading.loadingUpdateToCart ?
                                    <Content>
                                        <PLoadingTotal />
                                    </Content> :
                                    <p>${totalPrice ? formatNumber(totalPrice) : 0}</p>
                            }

                        </Wrapper>
                    </span>
                </DivTotals>
            </>
        )
    }

    const renderButtons = () => {
        if (!cartData?.items || cartData.items.length === 0) {
            return null;
        }

        return (
            <>
                {
                    loading.loadingDeleteToCart ||
                        loading.loadingUpdateToCart ||
                        loading.loadingEmptyCart ||
                        loading.loadingStartBuy ||
                        loading.loadingAddCoupon ||
                        loading.loadingAddToCart ||
                        loading.loadingDeleteCoupon ?
                        <>
                            {/* <ButtonDisabled
                                aria-label="Vaciar carrito"
                                className="disabled"
                            >
                                <img src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/e2550a75-61c1-4ed8-97ad-deea13f59e00/thumbnail" alt="Icono borrar" />
                                Vaciar carrito
                            </ButtonDisabled> */}
                            <ButtonDisabled aria-label="Iniciar compra" >
                                <Spinner/>
                            </ButtonDisabled>
                        </>
                        :
                        <>
                            {/* <ButtonEmptyCart onClick={() => clearCart()} aria-label="Vaciar carrito"><img src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8e51ff8c-e2e3-419e-a17f-b0a7c4ecc600/thumbnail" alt="Icono borrar" /> Vaciar carrito</ButtonEmptyCart> */}

                            <BtnLinkCart aria-label="Iniciar compra">
                                <a className="text-btn-link" href={`${process.env.NEXT_PUBLIC_REDIRECT_URL_BASE}/pago`}>
                                    Iniciar compra
                                </a>
                            </BtnLinkCart>
                        </>
                }
            </>
        )
    }

    const renderAddedProducts = () => {

        if (cartData?.items && cartData.items.length > 0 && variationsData) {
            return (
                <SectionCards>
                    {cartData.items.map(item => {
                        const attributes = variationsData?.find(it => it.id == item.id)

                        return (
                            attributes && (
                                <CardSidecart
                                    key={item.key}
                                    keyItem={item.key}
                                    quantity={item.quantity}
                                    quantity_limit={item.quantity_limit}
                                    name={item.name}
                                    totals={item.totals}
                                    regular_price={item.prices.regular_price}
                                    imageSrc={item.images?.[0]}
                                    removeItem={(key: string) => dispatch(onRemoveItemFromCart(key))}
                                    removeCoupon={(code: string) => dispatch(onRemoveCouponFromCart(code))}
                                    variations={attributes}
                                    isChange={loading?.loadingUpdateToCart}
                                    isDelete={loading?.loadingDeleteToCart}
                                    isCpCalc={loading?.loadingEmptyCart}
                                    isAddCoupon={loading?.loadingAddCoupon}
                                />
                            )
                        )
                    })}
                </SectionCards>
            )
        }
    }

    return (
        <Modal isOpen={isOpen} closeModal={closeCart} titleHeader={`Mi Carrito (${cartData?.items_count ?? 0})`}>

            {cartData && (
                <>
                    <BannerSidecart bannerId={'cljradr7r4jd60bjzsfb615xx'} />

                    {renderAddedProducts()}

                    {renderTotals()}

                    {cartData.items_count > 0 ? (
                        <DivSideCart>
                            <section>
                                {
                                    loading.loadingUpdateToCart ?
                                        <></>
                                        : renderCoupons()
                                }

                                {
                                    loading.loadingUpdateToCart ?
                                        <button
                                            className="btn-cupon"
                                            aria-label="Agregar cupón descuento"
                                            title="Agregar cupón descuento"
                                        >
                                            <Image fill={true} src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/203e4d54-8aff-4b8c-d7b1-1af5f7148500/thumbnail" alt="cupon icono" />
                                        </button>
                                        :
                                        <button
                                            className="btn-cupon"
                                            aria-label="Agregar cupón descuento"
                                            title="Agregar cupón descuento"
                                            onClick={toggleCoupon}
                                        >
                                            <Image fill={true} src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/203e4d54-8aff-4b8c-d7b1-1af5f7148500/thumbnail" alt="cupon icono" />
                                            <h5>Agregar cupón</h5>
                                        </button>
                                }

                                {openCoupon && (

                                    <>
                                        <ErrorP>{errCoupon}</ErrorP>
                                        <div className="section-add-coupon">
                                            {
                                                loading.loadingAddCoupon ?
                                                    <>
                                                        <input
                                                            className="input-cupon"
                                                            value={coupon}
                                                            placeholder="Ingresá tu cupón"
                                                            aria-placeholder="Ingresá tu cupón"
                                                            disabled
                                                        />
                                                        <button
                                                            className="btn-add-coupon"
                                                            title="Aplicando..."
                                                            aria-label="Aplicando"
                                                        >
                                                            aplicando...
                                                        </button>
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            loading.loadingDeleteCoupon ?
                                                                <>
                                                                    <input
                                                                        className="input-cupon"
                                                                        value={coupon}
                                                                        placeholder="Ingresá tu cupón"
                                                                        aria-placeholder="Ingresá tu cupón"
                                                                        disabled
                                                                    />
                                                                    <button
                                                                        className="btn-add-coupon"
                                                                        disabled
                                                                    >
                                                                        ...
                                                                    </button>
                                                                </>
                                                                :
                                                                <>
                                                                    <input
                                                                        className="input-cupon"
                                                                        value={coupon}
                                                                        onChange={(e) => setCoupon(e.target.value)}
                                                                        placeholder="Ingresá tu cupón"
                                                                        aria-placeholder="Ingresá tu cupón"
                                                                    />
                                                                    <button
                                                                        className="btn-add-coupon"
                                                                        onClick={onAddCoupon}
                                                                        title="Aplicar cupón"
                                                                        aria-label="Aplicar cupón"
                                                                    >
                                                                        aplicar
                                                                    </button>
                                                                </>
                                                        }
                                                    </>
                                            }
                                        </div>
                                    </>
                                )}

                            </section>
                        </DivSideCart>
                    ) :
                        <PEmptyCart>
                            <p>Tu carrito está vacío</p>
                            <Image fill={true} src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/fdded6b5-f37f-4eae-a0fa-522f87e77500/thumbnail" alt="Carrito img" />
                        </PEmptyCart>
                    }

                    {renderButtons()}
                    {
                        cartData.items_count > 0 && (
                        <TitleRelatedProducts>
                            El descuento adicional en un pago se aplica cuando elegis la forma de pago
                        </TitleRelatedProducts>)
                    }
                    {
                        cartData.items_count > 0 && (
                            <RelatedProducts
                                relatedItems={currentProductsRelated}
                                title=""
                                boldTitle=""
                                isMobile
                                fromCart={true}
                            />
                        )
                    }
                </>
            )}

        </Modal>

    )
}

export default SideCart;
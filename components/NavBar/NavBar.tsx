import { useEffect, useState } from "react";
import NavBarMobile from "./components/NavBarMobile";
import NavBarDesktop from "./components/NavBarDesktop";
import { menuData, staticLandings } from "./utils";
import SideCart from "../SideCart/SideCart";
import { useDispatch, useSelector } from "react-redux";
import HeadBanner from "../HeadBanner/HeadBanner";
import { MenuWrapper, NavBarWrapper } from "./styled";
import { useModal } from "@/hooks/useModal";
import { onCloseSideCart, onOpenSideCart } from "@/state/cart/cartActions";
import { deviceSizes } from "@/utils/Theme";
import Spinner from "../Spinner/Spinner";
import { useWidth } from "@/hooks/useWidth";
import { getCartItemsCount, getOpenSideCart } from "@/state/cart/cartSelector";
import { getLoadingAddOrUpdateCart } from "@/state/loading/loadingSelector";
import bannersIds from '@/utils/bannersIds.json'
import { useRouter } from "next/router";

const NavBar = () => {
    const dispatch = useDispatch()
    const [isOpenModal, openModal, closeModal] = useModal(false)
    const width = useWidth()
    const sideCartOpened = useSelector(getOpenSideCart)
    const itemsCount = useSelector(getCartItemsCount)
    const loadingAddOrUpdateCart = useSelector(getLoadingAddOrUpdateCart)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [selectedLink, setSelectedLink] = useState("")
    const [upperBannerId, setUpperBannerId] = useState("")
    const [lowerBannerId, setLowerBannerId] = useState("")
    const [showNavBar, setShowNavBar] = useState(false)
    const router = useRouter();

    const openCart = () => {
        dispatch(onOpenSideCart())
    }

    const closeCart = () => {
        dispatch(onCloseSideCart())
    }

    useEffect(() => {
        if(router) {
            setIsMenuOpen(false)
            if(router.asPath == "/quienes-somos") {
                setSelectedLink("Nosotrxs")
            } else if(router.asPath == "/localm") {
                setSelectedLink("Localm")
            } else if(router.asPath.includes("colchones")) {
                setSelectedLink("Colchones")
                if(router.asPath.includes("perro")) {
                    setUpperBannerId(bannersIds["upperBanner10Off"])
                    setLowerBannerId(bannersIds["lowerBannerColchonesMascotas"])
                }else if(router.asPath.includes("bb")) {
                    setUpperBannerId(bannersIds["upperBanner10Off"])
                    setLowerBannerId(bannersIds["lowerBannerColchonesBbs"])
                } else {
                    setUpperBannerId(bannersIds["upperBanner20Off"])
                    setLowerBannerId(bannersIds["lowerBannerColchones"])
                }
            } else if(router.asPath.includes("bases")) {
                setSelectedLink("Bases y sommiers")
                setUpperBannerId(bannersIds["upperBanner20Off"])
                setLowerBannerId(bannersIds["lowerBannerBasesYSommiers"])
            } else if(router.asPath.includes("almohadas")) {
                setSelectedLink("Almohadas")
                setUpperBannerId(bannersIds["upperBanner10Off"])
                setLowerBannerId(bannersIds["lowerBannerAlmohadas"])
            } else if(router.asPath.includes("ropa-de-cama")) {
                setSelectedLink("Ropa de cama")
                setUpperBannerId(bannersIds["upperBanner10Off"])
                setLowerBannerId(bannersIds["lowerBannerRopaDeCama"])
            }
            if((!lowerBannerId || !upperBannerId)) {
                setUpperBannerId(bannersIds["upperBannerHome"])
                setLowerBannerId(bannersIds["lowerBannerHome"])
            }
            if(router.asPath.includes("feria")) {
                setUpperBannerId("")
                setLowerBannerId("")
            }
        }
    }, [router.asPath])

    useEffect(() => {
        if(router && !router.asPath.includes("pago")) {
            setShowNavBar(true)
        }
    }, [router.asPath])

    useEffect(() => {
        if (sideCartOpened && !isOpenModal) {
            (openModal as () => void)() 
        } else if (!sideCartOpened && isOpenModal) {
            (closeModal as () => void)()
        }
    }, [sideCartOpened])

    return (
        <>
            {showNavBar &&
                <NavBarWrapper>
                    {upperBannerId && <HeadBanner bannerId={upperBannerId} isUpperBanner />}
                    <MenuWrapper>
                        { width > deviceSizes.mobile || width === 0 ?
                            <NavBarDesktop
                                menuData={menuData}
                                staticLandings={staticLandings}
                                cartItemsCount={
                                    loadingAddOrUpdateCart ?
                                    <Spinner /> :
                                    itemsCount
                                }
                                openCart={openCart}
                                selectedLink={selectedLink}
                            /> :
                            <NavBarMobile
                                menuData={menuData}
                                staticLandings={staticLandings}
                                cartItemsCount={
                                    loadingAddOrUpdateCart ?
                                    <Spinner /> :
                                    itemsCount
                                }
                                openCart={openCart}
                                selectedLink={selectedLink}
                                isMenuOpen={isMenuOpen}
                                setIsMenuOpen={setIsMenuOpen}
                            />
                        }
                    </MenuWrapper>
                    <SideCart isOpen={isOpenModal} openCart={openCart} closeCart={closeCart} />
                    {lowerBannerId && <HeadBanner bannerId={lowerBannerId} promotionBanner />}
                </NavBarWrapper>
            }
        </>
    )
}

export default NavBar
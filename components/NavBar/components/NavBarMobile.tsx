import {
    ArrowBack,
    BackText,
    BackWrapper,
    Cart,
    CartNumber,
    CartWrapper,
    CategoryHeader,
    CategoryItemTitle,
    CategoryItemWrapper,
    CategoryName,
    LandingLink,
    LandingsWrapper,
    LinkToCategory,
    MenuWrapper,
    MobileLogo,
    MobileMenuIconWrapper,
    MobileMenuWrapper,
    NavBarWrapper,
    NavigationDropDown,
    Pill,
    ProductLink,
    ProductWrapper,
    ProductsColumn,
    ProductsWrapper,
} from "./styled"
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Turn as MobileMenuIcon } from 'hamburger-react';
import { productURLRedirectionByURL } from "@/utils/productURLById";
import { IProps } from "./types";


const NavBarMobile = ({ menuData, staticLandings, cartItemsCount, selectedLink, openCart, isMenuOpen, setIsMenuOpen }: IProps) => {
    const [currentCategory, setCurrentCategory] = useState("");

    const onToggle = () => {
        setCurrentCategory("");
        if(setIsMenuOpen){
            setIsMenuOpen(prevState => !prevState);
        }
    }

    return (
        <>
            <NavBarWrapper>
                {/*  aria-label="Menú de navegación" */}
                <MobileMenuIconWrapper>
                    <MobileMenuIcon
                        toggled={isMenuOpen}
                        toggle={onToggle}
                        size={20}
                    />
                </MobileMenuIconWrapper>
                <a href={process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + "/"}><MobileLogo fill={true} src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/4cb0a97b-bb21-4f58-a83e-60eeea837e00/thumbnail" alt="logo mobile" /></a>
                <CartWrapper onClick={() => openCart()}><Cart fill={true} src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/d234b338-32c2-47a1-771b-0f787a19dd00/public" alt="carrito" /><CartNumber>{cartItemsCount}</CartNumber></CartWrapper>
            </NavBarWrapper>
            <MenuWrapper $isMenuOpen={isMenuOpen}>
                <MobileMenuWrapper>
                    {menuData.map((categoryItem) => {
                        return (
                            <div key={categoryItem.name}>
                                <CategoryItemWrapper $active={currentCategory != ""}>
                                    <CategoryItemTitle onClick={() => setCurrentCategory(categoryItem.name)}>
                                        <CategoryName $active={currentCategory == categoryItem.name || selectedLink == categoryItem.name}>
                                            {categoryItem.name}
                                        </CategoryName>
                                        <IoIosArrowForward />
                                    </CategoryItemTitle>
                                </CategoryItemWrapper>
                                <NavigationDropDown
                                    $active={currentCategory == categoryItem.name}
                                >
                                    <ProductsColumn>
                                        <BackWrapper onClick={() => setCurrentCategory("")}><ArrowBack /><BackText>atrás</BackText></BackWrapper>
                                        <CategoryHeader>{categoryItem.header}</CategoryHeader>
                                        <ProductsWrapper>
                                            {categoryItem.items.map((item) => (
                                                <ProductWrapper key={item.id} href={productURLRedirectionByURL(item.id)}>
                                                    <ProductLink>{item.name}</ProductLink>
                                                    {item.pillMessage && <Pill $isYellowPill={item.isYellowPill}>{item.pillMessage}</Pill>}
                                                </ProductWrapper>
                                            ))}
                                        </ProductsWrapper>
                                        <LinkToCategory href={categoryItem.redirect}>{categoryItem.seeMoreText}</LinkToCategory>
                                    </ProductsColumn>
                                </NavigationDropDown>
                            </div>
                        )
                    })}
                    <LandingsWrapper $active={currentCategory != ""}>
                        {staticLandings.map((landingData) => {
                            return (
                                <LandingLink href={landingData.redirect} key={landingData.name}>{landingData.name}</LandingLink>
                            )
                        })}
                    </LandingsWrapper>
                </MobileMenuWrapper>
            </MenuWrapper>
        </>
    )
}

export default NavBarMobile;
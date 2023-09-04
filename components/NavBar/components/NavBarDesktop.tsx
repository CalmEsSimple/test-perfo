import Link from 'next/link'
import {
    Cart,
    CartAndLandingsWrapper,
    CartNumber,
    CartWrapper,
    CategoryHeader,
    CategoryItemLink,
    CategoryItemTitle,
    CategoryItemWrapper,
    CategoryName,
    LandingLink,
    LandingsWrapper,
    LinkToCategory,
    Logo,
    LogoWrapper,
    MenuWrapper,
    NavBarWrapper,
    NavigationDropDown,
    Pill,
    ProductDescription,
    ProductImage,
    ProductLink,
    ProductName,
    ProductWrapper,
    ProductsColumn,
    ProductsWrapper,
    SelectedProductWrapper,
} from "./styled"
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { productURLRedirectionByURL } from '@/utils/productURLById';
import { IProps } from './types';

const NavBarDesktop = ({ menuData, staticLandings, cartItemsCount, selectedLink, openCart }: IProps) => {
    const [currentCategory, setCurrentCategory] = useState("");

    return (
        <>
            <LogoWrapper href={process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + "/"}>
                <Logo fill={true} src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/1c402bf2-3576-4250-dd6e-80fef24a0400/thumbnail" alt="logo"/>
            </LogoWrapper>
            <NavBarWrapper>
                <MenuWrapper>
                    {menuData.map((categoryItem) => {
                        return (
                            <CategoryItemWrapper key={categoryItem.name}>
                                <CategoryItemLink href={categoryItem.redirect}>
                                    <CategoryItemTitle
                                        $active={currentCategory == categoryItem.name || selectedLink == categoryItem.name}
                                        onMouseEnter={() => setCurrentCategory(categoryItem.name)}
                                        onMouseLeave={() => setCurrentCategory("")}
                                    >
                                        <CategoryName $active={currentCategory == categoryItem.name || selectedLink == categoryItem.name}>
                                            {categoryItem.name}
                                        </CategoryName>
                                        <IoIosArrowDown />
                                    </CategoryItemTitle>
                                </CategoryItemLink>
                                <NavigationDropDown
                                    $active={currentCategory == categoryItem.name}
                                    onMouseEnter={() => setCurrentCategory(categoryItem.name)}
                                    onMouseLeave={() => setCurrentCategory("")}
                                >
                                    <ProductsColumn>
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
                                    {categoryItem.selectedProducts.map((product) => (
                                        <SelectedProductWrapper key={product.id}>
                                            <Link href={productURLRedirectionByURL(product.id)}><ProductImage fill={true} src={product.image_url} alt="producto" /></Link>
                                            <ProductName href={productURLRedirectionByURL(product.id)}>{product.name}</ProductName>
                                            <ProductDescription>{product.description}</ProductDescription>
                                        </SelectedProductWrapper>
                                    ))}
                                </NavigationDropDown>
                            </CategoryItemWrapper>
                        )
                    })}
                </MenuWrapper>
                <CartAndLandingsWrapper>
                    <LandingsWrapper>
                        {staticLandings.map((landingData) => {
                            return (
                                <LandingLink
                                    key={landingData.name}
                                    $active={selectedLink === landingData.name}
                                    href={landingData.redirect}
                                >
                                    {landingData.name}
                                </LandingLink>
                            )
                        })}
                    </LandingsWrapper>
                    <CartWrapper onClick={() => openCart()}><Cart fill={true} src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/d234b338-32c2-47a1-771b-0f787a19dd00/public" alt="carrito" /><CartNumber>{cartItemsCount}</CartNumber></CartWrapper>
                </CartAndLandingsWrapper>
            </NavBarWrapper>
        </>
    )
}

export default NavBarDesktop;
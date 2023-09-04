import Image from 'next/image';
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io';
import styled from "styled-components";

export const NavBarWrapper = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1024px) {
        justify-content: space-between;
        position: relative;
    }
`;

export const LogoWrapper = styled.a`
    position: absolute;
    top: 0;
    left: 30px;
    z-index: 20;
    text-decoration: none;
    @media ${props => props.theme.devices.mobile} {
        display: none;
    }
`;

export const Logo = styled.img`
    width: 75px;
`;

export const CategoryItemWrapper = styled.div<{ $active?: boolean }>`
    height: ${props => props.$active ? "0" : "fit-content"};
    opacity: ${props => props.$active ? "0" : "1"};
    visibility: ${props => props.$active ? "hidden" : "visible"};
`;

export const BackWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
`;

export const CategoryItemTitle = styled.li<{ $active?: boolean }>`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    color: ${props => props.$active ? props.theme.colors.yellowCalm : props.theme.colors.blackOut};
    ${props => props.$active && `text-decoration: underline;`}
    &:hover {
        color: ${props => props.theme.colors.yellowCalm};
        text-decoration: underline;
    }
    @media ${props => props.theme.devices.mobile} {
        justify-content: space-between;
        margin: 10px 0;
        &:hover {
            color: ${props => props.theme.colors.black};
            text-decoration: none;
        }
    }
`;

export const CategoryItemLink = styled(Link)`
    text-decoration: none;
`;

export const MobileMenuWrapper = styled.div`
`

export const MenuWrapper = styled.ul<{ $isMenuOpen?: boolean }>`
    z-index: 1;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    flex-wrap: wrap;
    white-space: nowrap;
    transition: all .1s ease-in;
    font-size: 1em;
    justify-content: space-between;
    margin: 0;
    color: ${props => props.theme.colors.black};
    @media (max-width: 1024px) {
        height: 100vh;
        transition: transform .7s ease-in-out;
        width: -webkit-fill-available;
        flex-direction: column;
        transform: ${props => props.$isMenuOpen ? "translate(0)" : "translate(-150%)"};
        padding: 0 20px 10px 20px;
        position: absolute;
        background-color: ${props => props.theme.colors.white};
    }
`;

export const MobileMenuIconWrapper = styled.div`
    display: flex;
    margin: 0 10px;
    cursor: pointer;
`;

export const MobileLogo = styled.img`
    width: 65px;
    display: flex;
`;

export const NavigationDropDown = styled.div<{ $active: boolean }>`
    z-index: 1;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    background-color: ${props => props.theme.colors.white};
    width: 70%;
    position: absolute;
    top: 85px;
    left: 15%;
    opacity: ${props => props.$active ? "1" : "0"};
    visibility: ${props => props.$active ? "visible" : "hidden"};
    ${props => props.$active && "transform: translateY(-1rem);"}
    transition: all .3s ease-in;
    padding: 30px;
    @media ${props => props.theme.devices.mobile} {
        height: ${props => props.$active ? "fit-content" : "0"};
        position: unset;
        padding: 0 10px;
        ${props => props.$active && "margin-bottom: 20px;"};
        transform: none;
        justify-content: start;
        transition: none;
    }
`;

export const ProductsColumn = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
`;

export const ProductLink = styled.p`
    margin: 5px 5px 5px 0;
    font-family: ${props => props.theme.fonts.medium};
`;

export const CategoryHeader = styled.p`
    font-size: 13px;
    color: ${props => props.theme.colors.explosiveGray};
    margin-bottom: 8px;
`;

export const ProductsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    font-size: .9em;
    color: ${props => props.theme.colors.offBlack};
`;

export const LinkToCategory = styled(Link)`
    font-family: ${props => props.theme.fonts.extraBold};
    font-size: 0.8em;
    color: ${props => props.theme.colors.offBlack};
    text-decoration: none;
    margin-top: 0.3em;
`;

export const CategoryName = styled.p<{ $active?: boolean }>`
    margin-right: 5px;
    font-size: .9em;
    font-weight: 600;
    font-family: ${props => props.theme.fonts.light};
    color: ${props => props.$active ? props.theme.colors.yellowCalm : props.theme.colors.blackOut};
    
    @media ${props => props.theme.devices.mobile} {
        text-decoration: none;
        color: ${props => props.theme.colors.carbon};
        font-size: 1.2em;
        margin: 5px 0;
        ${props => props.$active && `color: ${props.theme.colors.black}; font-family: ${props.theme.fonts.bold};`}
    }
`;

export const CartAndLandingsWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    margin-right: 15px;
`;

export const LandingsWrapper = styled.div<{ $active?: boolean }>`
    display: flex;
    visibility: ${props => props.$active ? "hidden" : "visible"};
    opacity: ${props => props.$active ? "0" : "1"};
    @media ${props => props.theme.devices.mobile} {
        flex-direction: column;
        border-top: 1px solid ${props => props.theme.colors.explosiveGray};
    }
`;

export const CartWrapper = styled.div`
    display: flex;
    margin-left: 30px;
    cursor: pointer;
    position: relative;
    @media ${props => props.theme.devices.mobile} {
        margin: 0 20px;
    }
`;

export const LandingLink = styled(Link) <{ $active?: boolean }>`
    display: flex;
    text-decoration: none;
    color: ${props => props.$active ? props.theme.colors.yellowCalm : props.theme.colors.black};
    font-size: 0.8em;
    margin: 0 10px;
    transition: all .1s ease-in-out;
    &:hover {
        color: ${props => props.theme.colors.yellowCalm};
        text-decoration: underline;
    }
    @media ${props => props.theme.devices.mobile} {
        margin: 10px 0;
    }
`;

export const ProductWrapper = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.offBlack};
    transition: all .1s ease-in-out;
    &:hover {
        color: ${props => props.theme.colors.yellowCalm};
    }
    @media ${props => props.theme.devices.mobile} {
        font-size: 1.2em;
        margin: 5px 0;
    }
`;

export const Pill = styled.span<{$isYellowPill?: boolean}>`
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.$isYellowPill ? props.theme.colors.yellowCalm : props.theme.colors.coldMorning};
    text-transform: lowercase;
    color: ${props => props.$isYellowPill ? props.theme.colors.white : props.theme.colors.millionGray};
    border-radius: 15px;
    padding: 5px 8px;
    border-radius: 15px;
    font-size: .7em;
`;

export const SelectedProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProductImage = styled.img`
    width: 240px;
    border-radius: 10px;
`;

export const ProductName = styled(Link)`
    display: flex;
    flex-direction: row;
    color: ${props => props.theme.colors.offBlack};
    font-family: ${props => props.theme.fonts.extraBold};
    font-size: .8em;
    text-decoration: none;
    margin: 5px 0 10px 0;
`;

export const ProductDescription = styled.p`
    display: flex;
    flex-direction: row;
    font-size: .8em;
    color: ${props => props.theme.colors.millionGray};
`;

export const Cart = styled.img`
    height: 1.1em;

`;

export const CartNumber = styled.p`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    color: #fdfdfd;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.yellowCalm};
    left: 8px;
    bottom: 6px;
    font-family: ${props => props.theme.fonts.regular};
    font-size: 0.7em;
`;

export const ArrowBack = styled(IoIosArrowBack)`
    margin-top: 0.2em;
`;

export const BackText = styled.p`
    font-size: 1.2em;
    font-family: ${props => props.theme.fonts.bold};
`;

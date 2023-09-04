import styled from "styled-components";

export const ErrorP = styled.p`
    font-size: 0.8rem;
    color: red;
    font-weight: 700;
    text-align: center;
    margin: 0.4rem;
`

export const SectionCards = styled.section`
    max-height: 45%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 5%;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
    background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`

export const PEmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 2rem 0;

    img {
        width: 20px;
    }
`

export const PLoading = styled.p`
    text-align: center;
    margin: 2rem 0;
`

export const DivSideCart = styled.div`

    .btn-cupon {
        display: flex;
        background: none;
        border: none;
        margin: 1rem 1rem 0.7rem;       
        gap: 5px;
        font-size: 1rem;
        align-items: center;
        color: #8F4F9A;

        &:hover {
            cursor: pointer;
        }
    }

    .section-add-coupon {
        display: flex;
        justify-content: center;
        gap: 5px;
        height: 1.6rem;
        margin: 0 0 1rem 0;
    }

    .input-cupon {
        border-radius: 7px;
        border: 2px solid rgb(184 184 184);
        padding: 3px 5px;

        &:focus {
            outline: none !important;
            border: 2px solid rgb(250, 189, 0);
        }
    }

    .btn-add-coupon {
        padding: 4px 10px;
        background-color: gray;
        color: white;
        font-weight: 700;
        letter-spacing: 1.5px;
        border-radius: 7px;
        border: 2px solid gray;
        display: flex;
        align-items: center;

        &:hover {
            border-color: #5e5e5e;
            background-color: #5e5e5e;
        }

        &:focus {
            border-color: rgb(250, 189, 0);
        }
    }

    .ul-added-coupons {
        display: flex;
        justify-content: center;
        margin-top: 0.7rem;
        align-items: center;
        flex-direction: column;
        gap: 6px;
    }

    .li-added-coupon {
        width: 90%;
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        font-size: 0.8rem;
        align-items: center;
    }

    .span-coupon {
        display: flex;
        align-items: center;
        background-color: #8F4F9A;
        padding: 0.3rem 0.4rem;
        color: #fff;
        gap: 10px;
        border-radius: 5px;
        font-size: 0.8rem;
    }

    .coupon-discount {
        font-weight: 700;        
        color: #398245;
    }

    .btn-delete-added-coupon {
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        border: none;

        &:hover {
            cursor: pointer;
        }
    }

    .btn-delete-added-coupon-disabled {
        cursor: auto;
    }
`


export const BgSidecart = styled.div`
    background-color: rgba(0, 0, 0, 0.61);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: 21;
`;

export const Sidecart = styled.div`
    background-color: gray;
    top: 0;
    right: 0;
    z-index: 22;
    width: 100px;
`;

export const BtnLinkCart = styled.button`
    background-color: #FABD00;
    width: 90%;
    height: 2.5rem;
    border: none;
    border-radius: 6px;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgb(213 162 5);
        cursor: pointer;
    }

    .text-btn-link {
        text-decoration: none;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 1.2px;
    }
`

export const ButtonEmptyCart = styled.button`
    background: none;
    width: 90%;
    height: 2.5rem;
    border: 2px solid #FABD00;
    color: #FABD00;
    font-weight: 800;
    font-size: 0.9rem;
    border-radius: 6px;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 6px;

    &:hover {
        border: 2px solid #9e9e9e;
        color: #9e9e9e;
        cursor: pointer;
    }
`

export const ButtonDisabled = styled.button`
    background: none;
    width: 90%;
    height: 2.5rem;
    border: 2px solid #F1F1F1;
    color: #F1F1F1;
    font-weight: 800;
    font-size: 0.9rem;
    border-radius: 6px;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 6px;
`;

export const DivTotals = styled.div`
    border-top: solid #eee 2px;

    .section-subtotal {
        margin: 1rem 0;
        font-weight: 600;
    }

    .span-totals {
        margin: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .span-total {
        font-size: 1.3rem;
        font-weight: 800;
        font-family: ${props => props.theme.fonts.extraBold };
        text-transform: uppercase;
    }
`

export const PLoadingSubTotal = styled.p`
    width: 80px;
    height: 10px;
`

export const PLoadingTotal = styled.p`
    width: 80px;
    height: 25px;
`

export const TitleRelatedProducts = styled.p`
    color: ${props => props.theme.colors.offBlack};
    font-family: ${props => props.theme.fonts.extraBold};
    text-align: center;
`
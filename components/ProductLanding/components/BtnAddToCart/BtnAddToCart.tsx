import Spinner from "@/components/Spinner/Spinner";
import { Button } from "./styled"

interface IProps {
    disabledBtn?: boolean
    addTocart: () => void
    stateLoading?: boolean
}

export const BtnAddToCart = ({ disabledBtn, addTocart, stateLoading }: IProps) => {

    return (
        <>
            {
                stateLoading ?
                    <Button>
                        <Spinner/>
                    </Button>
                    :
                    <Button disabled={!disabledBtn} onClick={addTocart}>{disabledBtn ? "añadir al carrito" : "agotado"}</Button>
            }
        </>
    )
}

export default BtnAddToCart;
import { onGetCart } from "@/state/cart/cartActions";
import { getCartData } from "@/state/cart/cartSelector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Cart = () => {
    const dispatch = useDispatch();
    const cartData = useSelector(getCartData);

    useEffect(() => {
        if (!cartData) {
            dispatch(onGetCart())
        }
    }, []);

    return (
        <>
            CARRITO
            {cartData && cartData.items.map(item => item.name + ";")}
        </>
    )
}

export default Cart;
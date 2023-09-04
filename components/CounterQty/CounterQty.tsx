import Spinner from '../Spinner/Spinner';
import { CounterQtyStyle } from './styled';
import { IProps } from './types';
import { useEffect } from "react";


const CounterQty = ({qtyMax, quantity, backorder, updateItem, isChange, isDelete, isCpCalc, isAddCoupon}: IProps) => {

    useEffect(() => {

    }, [])

    const addOne = () => {
        if(backorder) {
            const newCounter = quantity + 1
            updateItem(newCounter)
        } else {
            if(quantity < qtyMax && qtyMax > 0) {
                const newCounter = quantity + 1
                updateItem(newCounter)
            }
        }

    }

    const subtractOne = () => {
        if(quantity > 0 && qtyMax > 0) {
            const newCounter = quantity - 1
            updateItem(newCounter)
        }
    }

    const disabledSum = (): boolean => {
        if(backorder) {
            return false
        }

        return quantity === qtyMax || qtyMax <= 0 ? true : false
    }

    return (
        <CounterQtyStyle>
            {
                 isCpCalc || isDelete ||  isChange || isAddCoupon ?
                <>
                    <button 
                        aria-label='Eliminar una unidad del producto'
                        title='Eliminar una unidad del producto'
                        
                        className='btn-add-rest'
                        disabled
                    >
                        -
                    </button>
                    <p className="counter-visor">
                        <Spinner></Spinner>
                    </p>
                    <button 
                        aria-label='Agregar una unidad del producto'
                        title='Agregar una unidad del producto'
                        
                        className='btn-add-rest'
                        disabled
                    >+</button>
                
                </>
                :
                <>
                    <button 
                        aria-label='Eliminar una unidad del producto'
                        title='Eliminar una unidad del producto'
                        onClick={subtractOne} 
                        className='btn-add-rest'
                        disabled={
                            quantity > qtyMax 
                            || qtyMax <= 0 
                            || quantity <= 0
                        }
                    >-</button>
                    <p className="counter-visor">{quantity}</p>
                    <button 
                        aria-label='Agregar una unidad del producto'
                        title='Agregar una unidad del producto'
                        onClick={addOne} 
                        className='btn-add-rest'
                        disabled={disabledSum()}
                    >+</button>
                </>
            }
            
        </CounterQtyStyle>
    )
}

export default CounterQty
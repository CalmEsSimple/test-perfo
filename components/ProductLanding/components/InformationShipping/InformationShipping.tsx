import { useState, useEffect } from 'react';
import {DivInformationShipping , Text, InputCP, ButtonCP, DeliverDate} from './styled'
import { useDispatch, useSelector } from 'react-redux';
import { onGetShippingTime } from '@/state/products/productsActions';
import { getShippintTime } from "@/state/products/productsSelector";
import { IStore } from '@/state/types';
import { IProps } from './types'

const InformationShipping = ({ product, clearInput, setClearInput }: IProps) => {
    const dispatch = useDispatch();
    const [showInput, setShowInput] = useState(false)
    const shippingTime = useSelector((state: IStore) => getShippintTime(state))
  
    const [cp,setCp] = useState<string>("")
    const [message, setMessage] = useState({
      flag: false,
      response: ''
    });

    useEffect(() => {
      setMessage({
        flag: false,
        response: ``
      });
      setClearInput(false)
      
    },[clearInput])

    useEffect(() => {
      if(shippingTime) {
        const deliveryDate = new Date(shippingTime.data.real_date)
         const today = new Date()
         const diffTime = Math.abs(deliveryDate.getTime() - today.getTime());
         const diffDays = (diffTime / (1000 * 60 * 60 * 24)); 
         
          if(diffDays < 1){
           setMessage({
             flag: true,
             response: 'Estás a menos de 24hs del descanso perfecto 🤩'
           });
       }else if(diffDays >= 1 && Math.ceil(diffDays)<11){
         setMessage({
           flag: true,
           response: `Estás a ${Math.ceil(diffDays)} días del descanso perfecto 🤩`
         });
       }else{
         setMessage({
           flag: true,
           response: `Te lo entregamos el ${deliveryDate.getDate()}/${deliveryDate.getMonth() + 1}/${deliveryDate.getFullYear()} 🤝✨`
         });
       } 
      }
    },[shippingTime])

    function calcularTiempo() {
    setMessage({
        flag: true,
        response: 'Calculando tiempo estimado...'
      });
      if (product && cp) {
        dispatch(onGetShippingTime(cp, product.id));
      } 
    }

    const handleChangeCp = (e: React.ChangeEvent<HTMLInputElement>) => {
      var numberValidate = /^\d*$/.test(e.target.value);

      if (!numberValidate) {
        setMessage({
          flag: true,
          response: 'Ingrese solo numeros'
        });
      } else {
        setCp(e.target.value)
        setMessage({
          flag: false,
          response: ''
        });
      }
     
    }

    return (
        <DivInformationShipping>
             <Text onClick={() => setShowInput(showInput ? false : true)}>CALCULÁ ACÁ EL TIEMPO DE ENVÍO</Text> 
            {
                showInput && 
                <div>
                    <InputCP
                      type='text'
                      placeholder='Ingresá tu codigo postal'
                      name="cp"
                      onChange={handleChangeCp}
                      value={cp} 
                    ></InputCP>
            
                    <ButtonCP onClick={() => calcularTiempo()}>Calcular</ButtonCP>
                     {
                      message.flag && <DeliverDate>{message.response}</DeliverDate>
                    } 
                </div>
            }
        </DivInformationShipping>
    )
}

export default InformationShipping;
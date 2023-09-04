import { ErrorP, Shipping, SpanCalcCP } from "./styled"
import { useState } from "react";
import { postCodeValid } from "@/utils/PostCodeValidator";
import { formatNumber } from "@/utils/formatPrices";

interface IProps {
    updateShipping: (postcode: string) => void;
    totalShipping?: string | number;
    isCpCalc?: boolean;
}

export const ShippingCalc = ({ updateShipping, totalShipping, isCpCalc }: IProps) => {

    const [showShippingCalc, setShowShippingCalc] = useState(false)
    const [postcode, setPostcode] = useState("");
    const [err, setErr] = useState("");

    const onClickShowShippingCalc = () => setShowShippingCalc(!showShippingCalc)

    const onUpdateShipping = () => {

        if (postCodeValid(postcode)) {
            updateShipping(postcode)
        } else {
            setErr("Ingresá un código postal válido")

            setTimeout(() => {
                setErr('');
            }, 3000);
        }
    }

    const showShippingCalcSection = () => {
        return (
            showShippingCalc ? (
                <SpanCalcCP showSecondRow={err ? true : false}>
                    {
                        isCpCalc ?
                            <>
                                <input
                                    className='input-calc'
                                    type="number"
                                    placeholder="cód. postal..."
                                    aria-label="Escribí tu cóodigo postal"
                                    disabled
                                />
                                <button
                                    className="btn-calc"
                                    title="Calcular costo de envío"
                                    aria-label="Calcular costo de envío"
                                    disabled
                                >
                                    calculando...
                                </button>

                                <ErrorP showErr={err ? true : false} className="error-postcode">{err}</ErrorP>
                            </>
                            :
                            <>
                                <input
                                    className='input-calc'
                                    type="number"
                                    placeholder="cód. postal..."
                                    aria-label="Escribí tu cóodigo postal"
                                    onChange={(e) => setPostcode(e.target.value)}
                                />
                                <button
                                    className="btn-calc"
                                    title="Calcular costo de envío"
                                    aria-label="Calcular costo de envío"
                                    onClick={onUpdateShipping}
                                >
                                    calcular
                                </button>

                                <ErrorP showErr={err ? true : false} className="error-postcode">{err}</ErrorP>
                            </>
                    }

                </SpanCalcCP>
            ) : <></>
        )
    }

    return (

        <Shipping>
            <span className="calc-span">
                <p>Envío</p>
                <button
                    className="calc-btn-trigger"
                    onClick={onClickShowShippingCalc}
                    title="Calcular costo de envío"
                    aria-label="Calcular costo de envío"
                >
                    <img src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/0763ec49-0769-4464-c1b9-8772bbb2fb00/thumbnail" alt="Icono lápiz" />
                </button>
            </span>

            {showShippingCalcSection()}

            <p className="final-price">{totalShipping !== '0' ? "$" + formatNumber(totalShipping as number) : 'GRATIS'}</p>
        </Shipping>

    )
}

export default ShippingCalc
import { useEffect, useState } from "react";
import { LandingContent } from "../../styled";
import { InputCP, Message, Separator, Subtitle, Title, Wrapper } from "./styled";
import CodigosPostales from "@/utils/cabaCPs";

const FeriaBanner = ({showCPValidator}: {showCPValidator?: boolean}) => {
    const [cp, setCP] = useState("")
    const [message, setMessage] = useState({error: false, text: ""})
    
    useEffect(() => {
        if(cp.length == 4) {
            if(CodigosPostales.find((element) => element === cp)) {
                setMessage({error: false, text: "😉 Felicitaciones, entregamos en tu domicilio"})
            } else {
                setMessage({error: true, text: "Lamentablemente estas fuera de la zona 🙁"})
            }
        } else {
            setMessage({error: false, text: ""})
        }
    }, [cp])
    return (
        <LandingContent>
            <Wrapper>
                <Title>Todxs merecemos una segunda oportunidad, el colchón Calm también</Title>
                <Subtitle>Nuestra <b>Feria Calm</b> es una alternativa increíble para vos que buscás el colchón mejor puntuado de Argentina con un gran descuento. Ofrecemos <b>colchones abiertos</b> en perfecto estado a precio amigx, con un <b>50% de descuento</b>.</Subtitle>
                {showCPValidator &&
                    <>
                        <Separator />
                        <Title>Ingresá tu código postal</Title>
                        <Subtitle>La Feria solo está habilitada en algunas zonas exclusivas de Buenos Aires a donde llegamos con nuestro propio servicio de entrega, ingresá tu CP para saber si entregamos en tu domicilio.</Subtitle>
                        <InputCP
                            placeholder="poné aca tu codigo postal"
                            type="number"
                            onChange={(e) => setCP(e.target.value)}
                            value={cp}
                        />
                        {message.text && <Message $error={message.error}>{message.text}</Message>}
                    </>
                }
            </Wrapper>
        </LandingContent>
      );
}

export default FeriaBanner
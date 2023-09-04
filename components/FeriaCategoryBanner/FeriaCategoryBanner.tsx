import { Banner, Button, Content, DivButton, Subtitle, Title, Wrapper } from "./styled";
import Pill from "../Pill/Pill";

const FeriaCategoryBanner = () => {
    return (
        <Banner>
            <Wrapper>
                    <img
                        src="https://calmessimple.com.ar/wp-content/uploads/2023/03/nuevo_logo_feria@3x.webp"
                        alt="feria"
                        width="25%"
                    />
                <Content>
                    <Pill text="STOCK LIMITADO"/>
                    <Title>Menor precio, <br/> misma calidad. <br/> 50% de descuento.</Title>
                    <Subtitle>pagando en efectivo o transferencia</Subtitle>
                    <DivButton>
                        <Button href="#productos">
                            ¡Compra con descuento!
                        </Button>
                    </DivButton>
                </Content>
            </Wrapper>
        </Banner>
    )
}

export default FeriaCategoryBanner;
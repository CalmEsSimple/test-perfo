import { LandingContent } from "../../styled";
import { Circle, Content, ItemWrapper, Items, Subtitle, Title, Wrapper } from "./styled";

const FeriaSection = ({showDonation}: {showDonation?: boolean}) => {
    return (
        <Content>
            <LandingContent>
                <Wrapper>
                    <Items>
                        <ItemWrapper>
                            <Circle />
                            <Title>Circular.</Title>
                            <Subtitle>Ahorramos recursos usando un producto reprocesado en vez de comprar uno nuevo.</Subtitle>
                        </ItemWrapper>
                        <ItemWrapper>
                            <Circle />
                            <Title>Precio amigx.</Title>
                            <Subtitle>Menor precio, misma calidad.</Subtitle>
                        </ItemWrapper>
                        <ItemWrapper>
                            <Circle />
                            <Title>Envío gratis.</Title>
                            <Subtitle>Llega gratis a tu domicilio en el día y horario que quieras.</Subtitle>
                        </ItemWrapper>
                        <ItemWrapper>
                            <Circle />
                            <Title>30 noches de prueba.</Title>
                            <Subtitle>Necesitas más de 5 minutos para enamorarte de tu colchón.</Subtitle>
                        </ItemWrapper>
                        <ItemWrapper>
                            <Circle />
                            <Title>5 años de garantía.</Title>
                            <Subtitle>Frente a defectos de fábrica, no de uso.</Subtitle>
                        </ItemWrapper>
                    </Items>
                    { showDonation && <Subtitle>A la vez, nos ayudas a conservar los recursos y hacer que el mundo sea <b>un poco más verde</b>. Y para darle el cierre que se merece, podes <span>donarnos tu ex colchón</span> al mismo tiempo que te entregamos el nuevo.</Subtitle>}
                </Wrapper>
            </LandingContent>
        </Content>
      );
}

export default FeriaSection
import { LandingContent } from "../../styled";
import { Wrapper, SectionContainer, Container, SpecsWrapper, SectionBoldTitle, SpecName, ImageWrapper, Img } from "./styled";

const ComboSection = () => {
    return (
        <LandingContent>
            <Wrapper>
                <SectionContainer>
                    <Container>
                        <ImageWrapper>
                            <Img src="https://calmessimple.com.ar/wp-content/uploads/2022/12/combo_colchon.webp" />
                        </ImageWrapper>
                        <SpecsWrapper>
                            <SectionBoldTitle>El colchón mejor<br/>puntuado de<br/>Argentina.</SectionBoldTitle>
                            <SpecName>Creemos que para encontrar tu colchón ideal necesitas más que 5 minutos en un local. Por eso tenes 30 noches de prueba ¡en tu casa!</SpecName>
                        </SpecsWrapper>
                    </Container>
                </SectionContainer>
                <SectionContainer>
                    <Container $isOkOrder>
                        <SpecsWrapper>
                            <SectionBoldTitle>La base que viene en<br/>caja.</SectionBoldTitle>
                            <SpecName>Pusimos especial foco en este punto y estamos orgullosos de lo fácil que es. En tan solo 15 minutos tenes lista tu nueva base.</SpecName>
                        </SpecsWrapper>
                        <ImageWrapper>
                            <Img src="https://calmessimple.com.ar/wp-content/uploads/2022/12/combo_original.webp" />
                        </ImageWrapper>
                    </Container>
                </SectionContainer>
                <SectionContainer>
                    <Container>
                        <ImageWrapper>
                            <Img src="https://calmessimple.com.ar/wp-content/uploads/2022/12/combo_pareja.webp" />
                        </ImageWrapper>
                        <SpecsWrapper>
                            <SectionBoldTitle>Compralos juntos y<br/>ahorrá en tu descanso<br/>soñado.</SectionBoldTitle>
                            <SpecName>Recibí tu colchón y base de hierro juntos y en caja, subilos por ascensor o escalera y disfrutá del mejor descanso.</SpecName>
                        </SpecsWrapper>
                    </Container>
                </SectionContainer>
            </Wrapper>
        </LandingContent>
      );
}

export default ComboSection
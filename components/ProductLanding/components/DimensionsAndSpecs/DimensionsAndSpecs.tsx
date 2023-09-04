import { LandingContent } from "../../styled";
import { BoldTitle, Container, ImageWrapper, Img, RadiographyImageWrapper, RadiographySubtitle, RadiographyText, RadiographyTitle, RadiographyWrapper, Row, SectionBoldTitle, SpecDescription, SectionContainer, SectionTitle, SpecName, SpecSize, SpecsWrapper, TableWrapper, Title, Wrapper } from "./styled";
import { IProps } from "./types";

const DimensionsAndSpecs = ({
    imageUrl,
    specs,
    specsTitle,
    specsBoldTitle,
    radiographyTitle,
    radiographyBoldTitle,
    radiographyImage,
    radiographyTexts
}: IProps) => {
    return (
        <LandingContent>
            <Wrapper>
                <SectionContainer>
                    <Title>{specsTitle}<BoldTitle>{specsBoldTitle}</BoldTitle></Title>
                    <Container>
                        <SpecsWrapper>
                            <TableWrapper>
                                {specs && specs.map(spec => (
                                    <Row key={spec.name} $isSize>
                                        <SpecName>{spec.name}</SpecName>
                                        <SpecSize>{spec.size}</SpecSize>
                                        {
                                            spec.description && <SpecDescription>{spec.description}</SpecDescription>
                                        }
                                    </Row>
                                ))}
                            </TableWrapper>
                        </SpecsWrapper>
                        <ImageWrapper><Img src={imageUrl} /></ImageWrapper>
                    </Container>
                </SectionContainer>
                {radiographyImage && (
                    <>
                        <SectionContainer>
                            <Title>{radiographyTitle}<BoldTitle>{radiographyBoldTitle}</BoldTitle></Title>
                            <Container $isRadiography>
                                <RadiographyImageWrapper>
                                    <Img src={radiographyImage} />
                                </RadiographyImageWrapper>
                                <RadiographyWrapper $isRadiography>
                                    <TableWrapper>
                                        {radiographyTexts && radiographyTexts.map((item, index) => (
                                            <Row key={index} $isOnlyTitle={!item.subtitle}>
                                                {item.subtitle ? (
                                                    <>
                                                        <RadiographyTitle $isRadiography>{item.title}</RadiographyTitle>
                                                        <RadiographySubtitle $isRadiography>{item.subtitle}</RadiographySubtitle>
                                                    </>) : (
                                                        <RadiographyTitle $isRadiography $isOnlyTitle={!item.subtitle}>{index + 1}. <RadiographyText>{item.title}</RadiographyText></RadiographyTitle>
                                                    )
                                                }
                                            </Row>
                                        ))}
                                    </TableWrapper>
                                </RadiographyWrapper>
                            </Container>
                        </SectionContainer>
                        <SectionContainer>
                            <Container>
                                <RadiographyWrapper>
                                    <SectionTitle>probalo 30 noches</SectionTitle>
                                    <SectionBoldTitle>en tu casa</SectionBoldTitle>
                                    <RadiographyTitle>tiempo de conocerse</RadiographyTitle>
                                    <RadiographySubtitle>Creemos que para encontrar tu colchón ideal necesitas más que 5 minutos en un local. Por eso tenes 30 noches de prueba ¡en tu casa!</RadiographySubtitle>
                                </RadiographyWrapper>
                                <RadiographyImageWrapper>
                                    <Img src="https://calmessimple.com.ar/wp-content/uploads/2019/10/img_30noches.webp" />
                                </RadiographyImageWrapper>
                            </Container>
                        </SectionContainer>
                    </>
                )}
            </Wrapper>
        </LandingContent>
      );
}

export default DimensionsAndSpecs
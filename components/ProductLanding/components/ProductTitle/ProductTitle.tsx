import { BoldComboDescription, BoldTitle, ComboDescription, ComponentWrapper, Description, LoadingDescriptionContent, LoadingTitleContent, LoadingWrapper, Title, TitleWrapper } from "./styled";
import { IProps } from "./types";
import parse from 'html-react-parser';

const ProductTitle = ({ title, boldTitle, description, productLoaded, isCombo }: IProps) => {
    return (
        <ComponentWrapper>
            <LoadingWrapper>
            {productLoaded  ? (
                <TitleWrapper>
                    <span>
                        <Title>{title}</Title>
                        <BoldTitle>{boldTitle}</BoldTitle>
                    </span>
                    <Description>{description && parse(description)}</Description>
                    {isCombo && 
                        <>
                            <ComboDescription>
                                <span><BoldComboDescription>¿Qué incluye?</BoldComboDescription></span><br/>
                                <span><BoldComboDescription>x1</BoldComboDescription> Colchón Calm</span><br/>
                                <span><BoldComboDescription>x1</BoldComboDescription> Base de Hierro Calm</span>
                            </ComboDescription>
                        </>
                    }
                </TitleWrapper>
            ) : (
                <>
                    <LoadingTitleContent />
                    <LoadingDescriptionContent />
                </>
            )}
            </LoadingWrapper>
        </ComponentWrapper>
    )
}

export default ProductTitle
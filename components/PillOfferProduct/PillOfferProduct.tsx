import { useQuery } from '@apollo/client'
import { OfferText } from './styled';
import { getPillOfferProduct } from '@/utils/hygraphHelper';
import { IProps } from './types';

const PillOfferProduct = ({ pillId, isRelatedProducts, isCategoriesSection, isFeatureProduct }: IProps) => {
    const { loading, data } = useQuery(getPillOfferProduct, {
        variables: { id: pillId }
    });

    return (
        <>
            {!loading && data.pillOfferProduct.text &&
                <OfferText
                    style={loading ? { backgroundColor: "#eee" } : { backgroundColor: data.pillOfferProduct.backgroundColor.hex, color: data.pillOfferProduct.textColor.hex }}
                    $isRelatedProducts={isRelatedProducts}
                    $isCategoriesSection={isCategoriesSection}
                    $isFeatureProduct={isFeatureProduct}
                >
                    {data.pillOfferProduct.text}
                </OfferText >
            }
        </>
    )
}

export default PillOfferProduct;
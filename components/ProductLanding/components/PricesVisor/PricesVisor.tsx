import { formatNumber } from '@/utils/formatPrices';
import { ContainerPrices, DiscountPrice, MultipleFees, RegularPrice } from './styled';
import { IProps } from "./types";

const PricesVisor = ({ publishedPrice, regularPrice, nrFees }: IProps) => {

    const fee = Math.floor((publishedPrice / nrFees))

    const showRegularPrice = () => {

        if (publishedPrice < regularPrice) {
            return (
                <RegularPrice>
                    ${formatNumber(regularPrice)}
                </RegularPrice>
            )
        }

        return <></>
    }

    return (
        <ContainerPrices>

            {showRegularPrice()}

            <DiscountPrice>
                ${formatNumber(publishedPrice)}
            </DiscountPrice>

            {nrFees != 1 && 
                <MultipleFees>
                    <span>en </span><span className='green-text'><strong>{nrFees} x ${formatNumber(fee)}</strong> sin interés</span>
                </MultipleFees>
            }
        </ContainerPrices>
    )
}

export default PricesVisor
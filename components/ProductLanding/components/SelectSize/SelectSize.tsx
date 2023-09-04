import { formatNumber } from '@/utils/formatPrices';
import variations_sizes from '../../utils/variations_sizes';
import { Select } from './styled';
import { IProps } from './types';

const SelectSize = ({ arrChildren, selected, setSelected, valToSearch, setClearInput }: IProps) => {

    return (
        <Select>
            <select
                className="selectorSelect"
                onChange={e => {
                    setSelected(e.target.value);
                    setClearInput(true)
                 }}
                value={selected?.id}
            >
                <option
                    key="select"
                    value=''
                    disabled
                >
                    Elegí una opción
                </option>

                {arrChildren?.map(child => (
                    <option
                        key={child.id}
                        value={child.id}
                    // disabled={child.stock > 0 || child.backorder ? false : true}
                    >
                        {variations_sizes[child.attributes[valToSearch as keyof typeof child.attributes] as keyof typeof variations_sizes]} - (${formatNumber(child.price)}) {child.stock > 0 || child.backorder ? `` : "- AGOTADO"}
                    </option>

                ))}
            </select>
        </Select >
    )

}

export default SelectSize
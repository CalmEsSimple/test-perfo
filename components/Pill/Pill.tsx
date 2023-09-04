import { PillContainer } from './styled';
import { IProps } from './types';

const Pill = ({ text }: IProps) => {
    return (
        <PillContainer>{text}</PillContainer>
    )
}

export default Pill
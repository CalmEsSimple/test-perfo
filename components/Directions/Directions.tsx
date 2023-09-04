import { DivDirections } from "./styled";
import Indications from "./Indication/Indications";
import MapLocalm from "./Map/Map";

const Directions = () => {
    return (
        <DivDirections>
            <Indications />
            <MapLocalm />
        </DivDirections>
    )
}

export default Directions
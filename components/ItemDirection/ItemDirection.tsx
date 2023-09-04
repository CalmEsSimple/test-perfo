import { Address, Hours, UrlMaps, AddressContainer } from "./styled"

interface IProps {
    direction: string
    serviceHours: string
    urlMap: string
}

const ItemDirection = ({ direction, serviceHours, urlMap }: IProps) => {
    return (
        <AddressContainer>
            <Address>{direction}</Address>
            <Hours>{serviceHours}</Hours>
            <UrlMaps target="blank" href={urlMap}>Ver en Maps</UrlMaps>
        </AddressContainer>
    )
}

export default ItemDirection;
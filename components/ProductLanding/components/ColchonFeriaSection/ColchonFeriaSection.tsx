import Donate from "@/components/Donate/Donate";
import { LandingContent } from "../../styled";
import { Column, ColumnTitle, Img, InnerColumn, Subtitle, Title, Wrapper } from "./styled";

const ColchonFeriaSection = () => {
    return (
        <LandingContent>
            <Wrapper>
                <Column>
                    <ColumnTitle>La radiografía del colchón perfecto.</ColumnTitle>
                    <InnerColumn>
                        <Img alt="radiografia" src="https://calmessimple.com.ar/wp-content/uploads/2019/10/378x523_Radiograf%C3%ADaColch%C3%B3nPerfecto.jpg" />
                        <div>
                        <Title>Capa de Confort</Title>
                        <Subtitle>Espuma soft HD de 4cm. de altura que aporta adaptabilidad / moldeado al cuerpo, confort y paso de aire (respirabilidad).</Subtitle>
                        <Title>Capa de Soporte</Title>
                        <Subtitle>Espuma de alta densidad (super firme) de 30kg/m3. En el colchón Calm Original esta capa es de 18 cm de alto y en el Original Plus de 24 cm. Ambas alturas aportan la misma durabilidad, soporte y firmeza</Subtitle>
                        </div>
                    </InnerColumn>
                </Column>
                <Column>
                    <ColumnTitle>Ni muy muy, ni tan tan...</ColumnTitle>
                    <Subtitle>De las pruebas que realizamos y por las pocas devoluciones que recibimos, la mitad dice que el colchón es demasiado firme, y la otra mitad dice que es demasiado suave, por lo que estamos seguros de que hemos encontrado el punto "justo"</Subtitle>
                    <img alt="firmeza" src="https://calmessimple.com.ar/wp-content/uploads/2021/04/escala-416x121.png" />
                </Column>
            </Wrapper>
            <div><Donate withBorder /></div>
        </LandingContent>
      );
}

export default ColchonFeriaSection
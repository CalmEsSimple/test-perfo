import { productURLRedirectionByURL } from "@/utils/productURLById";
import { BedDiv, DivTextButton, Title, Button } from "./BedCss";

const Bed = () => {
  return (
    <BedDiv>
      <DivTextButton>
        <Title>Volvamos a la cama</Title> <br />
        <Button
          href={productURLRedirectionByURL("334")}
          title="Ver colchón"
          aria-label="Ver colchón"
        >
          ver el colchón
        </Button>
      </DivTextButton>
    </BedDiv>
  );
};

export default Bed;

import { productURLRedirectionByURL } from "@/utils/productURLById";
import { BedDiv, DivTextButton, Title, Button } from "./BedParamsCss";
import { IProps } from "./types";

const BedParams = ({
  imgSrc,
  numberRedirect,
  titleButton,
  ariaLabelButton,
  textBanner,
}: IProps) => {
  return (
    <BedDiv $imgSrc={imgSrc ? imgSrc : ""}>
      <DivTextButton>
        <Title>{textBanner || "Calm es simple"}</Title> <br />
        <Button
          href={productURLRedirectionByURL(numberRedirect)}
          title={titleButton || "Calm es simple"}
          aria-label={ariaLabelButton}
        >
          {titleButton || "Calm es simple"}
        </Button>
      </DivTextButton>
    </BedDiv>
  );
};

export default BedParams;

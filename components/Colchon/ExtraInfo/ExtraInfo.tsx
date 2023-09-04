import {Ins, ItemLi, Span,SpanText } from "./ExtraInfoCss";

interface IProps {
  sizesText: string
  sizesPrice: string
  sizeLinePrice: string
  sizelink: string
}

const ExtraInfo = ({ sizesText, sizesPrice, sizeLinePrice, sizelink }: IProps) => {
  return (
    <ItemLi>
      <a href={sizelink} >
        <SpanText>{sizesText}:</SpanText>
        <span>
        <Ins>
            <span>${sizesPrice}</span>
          </Ins>
          {(sizesPrice != sizeLinePrice) && <Span>
              <span>${sizeLinePrice}</span>
          </Span>}

        </span>
      </a>
    </ItemLi>
  );
};

export default ExtraInfo;

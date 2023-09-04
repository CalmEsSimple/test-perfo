import {
  DivImgDescButt,
  SectionImgDescButt,
  DivInfo,
  DivImage,
  Img,
  Title,
  Text,
  Button,
} from "./ImgDescButtCss";
import infoHome from './HomeImgDescButt.json'

interface IPosts {
  firstImage: string
  firstTitle: string
  firstText: string
  firstButtonLink: string
  firstButtonText: string
  secondImage: string
  secondTitle: string
  secondText: string
  secondButtonLink: string
  secondButtonText: string
}

interface IProps {
  info?: IPosts
}

const ImgDescButt = (props: IProps) => {
  const info = props.info ? props.info : infoHome
  return (
    <SectionImgDescButt>
    <DivImgDescButt>
      <DivInfo>
        <DivImage>
          <Img data-src={info.firstImage} src={info.firstImage} alt="CalmImage" className="lazyload" />
        </DivImage>
        <Title>{info.firstTitle}</Title>
        <Text>{info.firstText}</Text>
        <Button href={info.firstButtonLink} role="button">
            <span>{info.firstButtonText}</span>
        </Button>
      </DivInfo>
      <DivInfo>
        <DivImage>
          <Img data-src={info.secondImage} src={info.secondImage} alt="CalmImage" className="lazyload" />
        </DivImage>
        <Title>{info.secondTitle}</Title>
        <Text>{info.secondText}</Text>
        <Button href={info.secondButtonLink} role="button">
            <span>{info.secondButtonText}</span>
        </Button>
      </DivInfo>
    </DivImgDescButt>
    </SectionImgDescButt>
  );
};

export default ImgDescButt;

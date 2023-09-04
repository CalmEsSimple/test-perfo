import { useEffect, useState } from "react";
import { IUnitProps } from "../types";
import {
  Title,
  Icon,
  ImgStatic,
  ImgRotate,
  Content,
  Inner,
  DivIconPlus
} from "./AccordionUnitCss";
import parse from 'html-react-parser';

const AccordionUnit = ({
  onClick,
  itemName,
  itemContent,
  isActive,
  DivContainerAccordion,
  DivTitleAccordion,
  DivTextAccordion,
  TittleAccordion,
  DescriptionAccordion,
  IconIsActive,
  isLastUnit,
  isFAQPage,
  is30night
}: IUnitProps) => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [])

  const IconsLinks = {
    arrow: "https://res.cloudinary.com/djrihqr0s/image/upload/c_fit,h_20,w_30/v1683735018/ecommerce-calm/utils/flechaAbajo.svg",
    plusLess: {
      plus: "https://res.cloudinary.com/djrihqr0s/image/upload/v1683723769/ecommerce-calm/utils/mas.svg",
      less: "https://res.cloudinary.com/djrihqr0s/image/upload/v1683723769/ecommerce-calm/utils/menos.svg",
    },
    plusString: "+"
  };

  return (
    <DivContainerAccordion $isLastUnit={isLastUnit} $is30night={is30night}>
      <DivTitleAccordion>
        <Title onClick={onClick}>
          { IconIsActive.LocalmEmpathy ? (
            <>
            <svg width="15" height="15" viewBox="0 0 20 18" fill="none">
              <path
                d="M18.3333 9.23336V10C18.3323 11.797 17.7504 13.5456 16.6744 14.9849C15.5985 16.4242 14.0861 17.4771 12.3628 17.9866C10.6395 18.4961 8.79771 18.4349 7.11205 17.8122C5.42639 17.1894 3.9872 16.0384 3.00912 14.5309C2.03105 13.0234 1.56648 11.2401 1.68472 9.44696C1.80296 7.65383 2.49766 5.94697 3.66522 4.58092C4.83278 3.21488 6.41064 2.26285 8.16348 1.86682C9.91632 1.47079 11.7502 1.65198 13.3917 2.38336"
                stroke="#F19E00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M18.3333 3.33331L10 11.675L7.5 9.17498"
                stroke="#F19E00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <TittleAccordion>{parse(itemName)}</TittleAccordion>
            <ImgStatic
                fill={true}
                $isActive={isActive}
                src={
                  isActive
                    ? IconsLinks.plusLess.less
                    : IconsLinks.plusLess.plus
                }
                alt="flecha"
              ></ImgStatic>
            </>
          ) : ( IconIsActive.frequentQuestions ? (
            <DivIconPlus $isFAQPage={isFAQPage}>
              <ImgStatic
                $isActive={isActive}
                src={
                  isActive
                    ? IconsLinks.plusLess.less
                    : IconsLinks.plusLess.plus
                }
                alt="flecha"
                fill={true}
              ></ImgStatic>
              <TittleAccordion >{parse(itemName)}</TittleAccordion>
            </DivIconPlus>
          ) : (
            <>
              <TittleAccordion is30night={is30night}>{parse(itemName)}</TittleAccordion>
              {IconIsActive.LocalmQuestions ? (
                <ImgRotate
                  $isActive={isActive}
                  src={IconsLinks.arrow}
                  alt="flecha"
                  fill={true}
                ></ImgRotate>
              ) : (
                <Icon $isActive={isActive}>{IconsLinks.plusString}</Icon>
              )}
            </>
         ))}
        </Title>
      </DivTitleAccordion>
      <DivTextAccordion>
        <Content id={itemName} $itemName={itemName} $isActive={isActive} $render={render} >
          <DescriptionAccordion>
            <Inner
              id={itemName}
              $isFAQPage={isFAQPage}
            >{parse(itemContent)}</Inner>
          </DescriptionAccordion>
        </Content>
      </DivTextAccordion>
    </DivContainerAccordion>
  );
};

export default AccordionUnit;

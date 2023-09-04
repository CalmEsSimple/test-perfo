import React from "react";
import { ContainerImg, ContainerTitleButtom, ContainerNotFound, TitleNotFound, DivButton, Button } from "./404-Css";
import { IProps } from "./types";
import LinksContactNotFound from "./LinksContact/LinksContactNotFound";
export default function NotFoundComponent({isYellowTitle, isMobile}: IProps) {
  return (
    <ContainerNotFound>
      <ContainerImg>
        <img
          width="300"
          height="150"
          src="https://calmessimple.com.ar/wp-content/uploads/2021/04/404.svg"
          className="attachment-medium size-medium"
          alt="404"
        />
      </ContainerImg>
      <ContainerTitleButtom>
          <TitleNotFound $isYellowTitle={isYellowTitle} $isMobile={isMobile}>Ups, parece que esta página se fue a mimir</TitleNotFound>
          <DivButton>
          <Button href="/">
           Volver a la Home
          </Button>
        </DivButton>
      </ContainerTitleButtom>
      <LinksContactNotFound></LinksContactNotFound>
    </ContainerNotFound>
  );
}

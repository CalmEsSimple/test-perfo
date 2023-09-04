import { useState } from "react";
import {
  DivButtonModal,
  TitleModal,
  TextModal,
  ImgModal,
  DividorModal,
  TitleContentModal,
  TextContentModal,
  Img,
  DivImg,
  ButtonClose,
  DivModal,
  ContainerModal,
  Bold,
  SeePaymentMethods
} from "./ModalCss";

const ComponentModal = ({showText}: {showText?: boolean}) => {
  const [modal, setModal] = useState(false);

  const modalHandle = () => {
    modal ? setModal(false) : setModal(true);
  };

  return (
    <>
    {
      showText ? (
        <SeePaymentMethods onClick={() => modalHandle()}>ver todos los medios de pago</SeePaymentMethods>
      ) : (
        <DivButtonModal>
          <ImgModal
            onClick={() => modalHandle()}
            alt="boton mas"
            src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/e8e3136e-ea10-44af-35fa-bbb4460d4100/fit=scale-down"
          />
      </DivButtonModal>
      )
    }

      {modal ? (
        <ContainerModal>
          <DivModal>
            <ButtonClose title="Cerrar" aria-label="Cerrar" onClick={() => modalHandle()}>X</ButtonClose>
            <TitleModal>
              <Bold>Métodos de pago</Bold>
            </TitleModal>
            <TextModal>
              Podés pagar tus compras con cualquiera de estos medios.
            </TextModal>
            <DividorModal />
            <div>
              <TitleContentModal>
                Tarjetas de crédito bancarias
              </TitleContentModal>
              <TextContentModal>hasta 12 cuotas sin interés</TextContentModal>
              <DivImg>
                <Img
                  src="https://calmessimple.com.ar/wp-content/uploads/2021/09/visa-master-amex-e1632486483713-300x44.png"
                  alt="Metodos de pago"
                ></Img>
              </DivImg>
              <TextContentModal>hasta 6 cuotas sin interés</TextContentModal>
              <DivImg>
                <Img
                  width="115"
                  height="30"
                  src="https://calmessimple.com.ar/wp-content/uploads/2021/09/narnaja-300x83.png"
                  alt="Metodos de pago"
                ></Img>
              </DivImg>
            </div>
            <DividorModal />{" "}
            <div>
              <TitleContentModal>Tarjetas de débito</TitleContentModal>
              <DivImg>
                <Img
                  src="https://calmessimple.com.ar/wp-content/uploads/2021/09/visa-master-cabal.webp"
                  alt="Metodos de pago"
                />
              </DivImg>
            </div>
            <div>
              <DividorModal />
              <TitleContentModal>Transferencia</TitleContentModal>
              <DivImg>
                <Img
                  width="140"
                  height="44"
                  alt="transferencia"
                  src="https://calmessimple.com.ar/wp-content/uploads/2021/09/transferencia-bancaria-300x86.png"
                ></Img>
              </DivImg>
            </div>
          </DivModal>
        </ContainerModal>
      ) : (
        <></>
      )}
    </>
  );
};

export default ComponentModal;

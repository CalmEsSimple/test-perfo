import { useEffect, useState } from 'react'
import {
  Bold,
  TitlePostal,
  DivAlert,
  DivImgAlert,
  TextAlert,
  InputPostal,
  RedText,
  GreenText,
  ButtonPostal,
  ImgAlert,
  InputContainer,
} from './styled'

interface IProps {
  alertMessage: string
  codigosPostales: (string | number)[]
  showTitle?: boolean
  showButton?: boolean
  buttonAction?: () => void
}

const PostalInput = ({
  alertMessage,
  codigosPostales,
  showButton = true,
  showTitle = true,
  buttonAction,
}: IProps) => {
  const [postal, setPostal] = useState<string>('')
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  useEffect(() => {
    if (postal.length >= 4) {
      const found = codigosPostales.find((element) => element === postal)
      setHasUserInteracted(true)
      setIsButtonDisabled(!found)
    } else {
      setHasUserInteracted(false)
    }
  }, [postal])
  return (
    <InputContainer>
      {showTitle && (
        <TitlePostal>
          <Bold>Introduce tu código postal</Bold>
        </TitlePostal>
      )}
      <DivAlert>
        <DivImgAlert>
          <ImgAlert
            src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/1b0595b8-94ac-4c62-0275-d49fb540c000/fit=scale-down"
            alt="alert"
          />
        </DivImgAlert>
        <TextAlert>{alertMessage}</TextAlert>
      </DivAlert>
      <InputPostal
        type="number"
        placeholder="introducí tu código postal"
        onChange={(e) => setPostal(e.target.value)}
      ></InputPostal>
      {hasUserInteracted ? (
        isButtonDisabled! ? (
          <RedText>
            Lamentablemente entrega de ensueño todavía no llega a tu domicilio
            😔
          </RedText>
        ) : (
          <GreenText>😉 Felicitaciones, llegamos a tu domicilio.</GreenText>
        )
      ) : (
        <></>
      )}
      {showButton && (
        <ButtonPostal onClick={buttonAction} disabled={isButtonDisabled}>
          continuar con la compra
        </ButtonPostal>
      )}
    </InputContainer>
  )
}

export default PostalInput

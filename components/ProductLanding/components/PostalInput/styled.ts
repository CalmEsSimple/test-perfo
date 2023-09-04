import { styled } from 'styled-components'

export const InputContainer = styled.div``

export const TitlePostal = styled.h3`
  font-weight: 200;
  font-size: 1.5em;
  line-height: 40px;
  color: ${(props) => props.theme.colors.offBlack};
  margin-bottom: 2rem;
  line-height: 1;
  width: 100%;
  text-align: center;
`

export const InputPostal = styled.input`
  padding: 12px 7px;
  border-width: 0px;
  box-shadow: 0px -2px 2px #e4e4e4;
  background-color: #f4f4f4;
  display: flex;
  margin: auto;
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 1em;
  width: 15em;
  text-align: center;
  border-radius: 6px;

  &:active,
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.yellowCalm};
  }
`
export const Bold = styled.b`
  font-family: ${(props) => props.theme.fonts.extraBold};
`
export const TextAlert = styled.p`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 0.8rem;
  line-height: 0.8rem;
  color: #303030;
  padding-right: 1rem;
`

export const DivAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 6px;
`

export const ImgAlert = styled.img`
  width: 60%;
  max-width: 40px;
  height: auto;
  margin: auto;
`

export const DivImgAlert = styled.div`
  width: 30%;
  display: flex;
`

export const GreenText = styled.p`
  margin-top: 1rem;
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 0.8em;
  color: #40914d;
  text-align: center;
`

export const RedText = styled.p`
  margin-top: 1rem;
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 0.8em;
  color: #fd4242;
  text-align: center;
`

export const ButtonPostal = styled.button`
  display: inline-block;
  background-color: #fabd00;
  border-color: #fabd00;
  border-radius: 6px;
  padding: 10px;
  color: #ffffff;
  width: 100%;
  text-align: center;
  font-size: 13px;
  margin-top: 1.5rem;
  opacity: ${(props) => (props.disabled ? '.5!important' : '')};

  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`

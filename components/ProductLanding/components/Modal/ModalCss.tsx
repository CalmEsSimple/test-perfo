import styled from 'styled-components'

export const DivButtonModal = styled.div`
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  /*   display: inline-block; */
  margin-top: 5px;
`

export const IconModal = styled.img`
  cursor: pointer;
  width: 100%;
`

export const ImgModal = styled.img`
  width: 100%;
  height: auto;
  position: relative;
`

export const ContainerModal = styled.div`
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9998;
  }
`

export const DivModal = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: auto;
  box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
  z-index: 9998;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 355px;
`

export const InformationModal = styled.div`
  padding: 10px 20px;
  margin-bottom: 1rem;
`

export const TitleModal = styled.h2`
  font-weight: 200;
  font-size: 2.3em;
  line-height: 40px;
  color: ${(props) => props.theme.colors.offBlack};
`

export const TitleText = styled.p`
  font-size: 1em;
  color: ${(props) => props.theme.colors.offBlack};
  margin: 1rem 0 0.5rem 0;
`

export const TextModal = styled.h3`
  font-size: 0.9em;
  font-weight: 200;
  font-family: ${(props) => props.theme.fonts.regular};
  margin-bottom: 1.2rem;
  color: #303030;
`

export const TextAlert = styled.p`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 0.8em;
  color: #303030;
`

export const DivAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

export const DivImgAlert = styled.div`
  width: 30%;
  display: flex;
`

export const ImgAlert = styled.img`
  width: 60%;
  height: auto;
  margin: auto;
`

export const LinkDetails = styled.a`
  border: none;
  background-color: transparent;
  box-shadow: none;
  color: #fabd00;
  font-size: 1em;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`

export const TitlePostal = styled.h3`
  font-weight: 200;
  font-size: 1.5em;
  line-height: 40px;
  color: ${(props) => props.theme.colors.offBlack};
  margin-bottom: 2rem;
  line-height: 1;
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
`

export const ButtonClose = styled.button`
  float: right;
  cursor: pointer;
  font-size: 19px;
  font-weight: bold;
  color: white;
  border: none;
  background: none;
  padding: 0;
  position: absolute;
  right: 7%;
  top: 3%;
  z-index: 9999;
`

export const Bold = styled.b`
  font-family: ${(props) => props.theme.fonts.extraBold};
`

export const ButtonPostal = styled.button`
  display: inline-block;
  background-color: #fabd00;
  border-color: #fabd00;
  border-radius: 6px;
  padding: 10px;
  width: 300px;
  color: #ffffff;
  text-align: center;
  font-size: 13px;
  margin-top: 1.5rem;
  opacity: ${(props) => (props.disabled ? '.5!important' : '')};

  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
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

export const DivModalReviews = styled.div`
  overflow-y: scroll;
  position: fixed;
  max-height: 600px;
  top: 50%;
  left: 50%;
  margin: auto;
  box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
  z-index: 9998;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 550px;

  @media ${(props) => props.theme.devices.mobile} {
    max-height: 500px;
    width: 350px;
  }
`

export const ButtonClosereviews = styled.button`
  cursor: pointer;
  font-size: 19px;
  padding: 0 4px 0 4px;
  font-weight: bold;
  color: white;
  background-color: black;
  border-radius: 50%;
  z-index: 9999;
  float: right;
`

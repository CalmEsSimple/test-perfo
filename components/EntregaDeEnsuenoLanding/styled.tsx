import { styled } from 'styled-components'

export const LandingContainer = styled.section`
  width: 100%;
  max-width: 1084px;
  text-align: left;
  margin: 2rem auto;
`

export const ProductDetail = styled.span`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  gap: 1rem;
  b {
    display: block;
    font-family: ${(props) => props.theme.fonts.extraBold};
    font-size: 1rem;
  }

  @media ${(props) => props.theme.devices.biggerMobile} {
    font-size: 1rem;
  }
`
export const Price = styled.p`
  font-family: ${(props) => props.theme.fonts.light};
  font-size: 2.2rem;
  margin: 1rem 0;
`

export const TitleWrapper = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media ${(props) => props.theme.devices.mobile} {
    gap: 0.1rem;
  }
`

export const SpanTitle = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0;
  @media ${(props) => props.theme.devices.biggerMobile} {
    flex-direction: row;
  }
`

export const Title = styled.h3`
  font-weight: 200;
  font-size: 2.6rem;
  line-height: 40px;
  color: ${(props) => props.theme.colors.offBlack};
  margin: 0;

  @media ${(props) => props.theme.devices.mobile} {
    font-size: 2.2rem;
    line-height: 32px;
    margin-bottom: 0.5rem;
  }
`

export const BoldTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 2.3rem;
  line-height: 38px;
  margin-left: 0.6rem;

  @media ${(props) => props.theme.devices.mobile} {
    font-size: 2rem;
    line-height: 30px;
    margin-left: 0.5rem;
  }
`

export const Description = styled.p`
  color: ${(props) => props.theme.colors.offBlack};
  font-size: 1.1em;
  line-height: 20px;

  strong {
    font-family: ${(props) => props.theme.fonts.extraBold};
  }
`
export const InfoContainer = styled.div`
  display: flex;
  width: 100vw;

  @media ${(props) => props.theme.devices.mobile} {
    width: 100%;
    flex-direction: column;
  }

  @media ${(props) => props.theme.devices.biggerMobile} {
    &:first-child {
      flex-direction: column;
    }
  }
`

export const MediaContainer = styled.div`
  padding: 10px;
  max-width: 700px;

  video {
    max-height: 500px;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  @media ${(props) => props.theme.devices.biggerMobile} {
    margin: 0 auto;
  }

  @media ${(props) => props.theme.devices.mobile} {
    max-width: 768px;
    margin: 0;
  }
`

export const DivContainer = styled.div`
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  padding 10px;
  margin: 10px;
  max-width: 380px;

  @media ${(props) => props.theme.devices.mobile} {
    max-width: 100%;
  }
`
export const NuggetsContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;

  @media ${(props) => props.theme.devices.mobile} {
    max-width: 100%;
  }
`

export const PasoAPasoContainer = styled(DivContainer)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const PasoAPasoInfo = styled.p`
  margin-top: 10px;
  margin-left: 36px;
  font-size: 0.9rem;
  color: #7ba1ec;
  font-family: ${(props) => props.theme.fonts.medium};

  @media ${(props) => props.theme.devices.biggerMobile} {
    margin-left: 0;
    width: 100%;
    text-align: center;
  }
`

export const PasosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  h2 {
    margin-top: 20px;
    font-family: ${(props) => props.theme.fonts.extraBold};
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    h3 {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.yellowCalm};
      font-family: ${(props) => props.theme.fonts.extraBold};
    }
    p {
      padding: 4px;
    }
    b {
      font-size: 0.8rem;
    }
  }
`

export const DivLine = styled.div`
  width: calc(100% - 20px);
  height: 30px;
  border-top: 1px solid #d0d0d0;
  margin: 0 auto;
  margin-top: 10px;
`
export const ReciclarContainer = styled(DivContainer)`
  padding: 1rem;
  max-width: 680px;
  display: flex;
  align-items: center;
  text-align: center;
  min-height: 186px;
  margin-top: 30px;

  img {
    margin: 1rem;
  }

  @media ${(props) => props.theme.devices.biggerMobile} {
    max-width: 100%;
    flex-direction: column;
  }
`

export const ProductInfoContainer = styled.div`
  max-width: 380px;
  padding 10px;
  margin: 10px;

  @media ${(props) => props.theme.devices.biggerMobile} {
    max-width: 100%;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;

  @media ${(props) => props.theme.devices.mobile} {
    width: 100%;
  }
`

import styled from "styled-components";


export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 2.2em;
  font-weight: 600;
  letter-spacing: 0.5px;
  -webkit-text-stroke: 0.4px white;
  color: transparent;
  margin: 0px;
  margin-bottom: 10px;
  @media ${props => props.theme.devices.biggerMobile} {
    font-size: 1.9rem;
  }
  @media ${props => props.theme.devices.mobile} {
    font-size: 1.5rem;
  }
`
export const Text = styled.p`
  color: #fafafa;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 0.85em;
  font-weight: 100;
  line-height: 1.3em;
  letter-spacing: 0px;
  margin: 0px;
  b {
     font-family: ${props => props.theme.fonts.extraBold};
  }
  @media ${props => props.theme.devices.biggerMobile} {
    font-size: 0.70em;
  }
  @media ${props => props.theme.devices.mobile} {
    font-size:0.60em;
  }
  
`
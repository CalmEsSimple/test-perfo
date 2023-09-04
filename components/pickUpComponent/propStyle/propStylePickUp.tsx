import styled from "styled-components";


export const Title = styled.h2`
    color: #FFB800;
    font-family: ${props => props.theme.fonts.extraBold};
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    margin-bottom: 15px;
  @media ${props => props.theme.devices.biggerMobile} {
    font-size: 2.1rem;
    color: white;
  }
  @media ${props => props.theme.devices.mobile} {
    font-size: 1.2rem;
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
    font-size: 1rem;
    font-family: ${props => props.theme.fonts.medium};
  }
  @media ${props => props.theme.devices.mobile} {
    font-size:0.60em;
  }
  
`
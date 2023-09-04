import styled from "styled-components";

export const DivWithdrawals = styled.section`
    background-color: #f9f9f9;
    text-align: center;
    padding: 20px 0px 20px 0px;
`

export const DivWithdrawalsText = styled.div`
    width: 57%;
    margin: auto;
    @media (max-width: 768px) {
        width: 90%;
  }
`  

export const TitleWithdrawals =  styled.h2`
  color: #303030;
  font-family: ${props => props.theme.fonts.extraBold};
  font-weight: 800;
  font-size: 2em;
  @media (max-width: 768px) {
    font-size: 21px;
  }
`

export const TextWithdrawals =  styled.div`
  font-family: ${props => props.theme.fonts.regular};
  margin-top: 2rem;
  color: #303030;
  font-weight: 400;
  line-height: 1.618;
  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`
export const Bold = styled.b`
  font-family: ${props => props.theme.fonts.extraBold};
`


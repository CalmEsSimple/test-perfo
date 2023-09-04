import styled from "styled-components";

export const Title = styled.h2`
  color: ${props => props.theme.colors.offBlack};
  font-size: 1.7rem;
  font-family: ${props => props.theme.fonts.extraBold};
  letter-spacing: 0.5px;
  margin-bottom: 0.9rem;
    
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const DivIndications = styled.div`
  justify-self: flex-start;
  align-self: center;
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Hr = styled.hr`
  color: #999999;
`;
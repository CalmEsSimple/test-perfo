import styled from "styled-components";

export const DivLanding = styled.div`
  background-color: rgba(25, 25, 28, 0.05);
  padding: 10px;
`;

export const DivTitleLanding = styled.div`
  padding: 5rem 0px 3rem 0px;
  margin: auto;
  text-align: center;
`;

export const TitleLanding = styled.h1`
  color: rgba(250, 189, 0, 0.99);
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 2em;
  font-weight: 800;
  margin-bottom: 2rem;
`;

export const TextTitle = styled.p`
  font-family: ${props => props.theme.fonts.extraBold};
  color: rgba(25,25,28,0.8);
    font-size: 15px;
    font-weight: 600;
`;

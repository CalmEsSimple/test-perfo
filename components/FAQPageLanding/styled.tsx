import styled from "styled-components";

export const DivLanding = styled.section`
  background-color: rgba(25, 25, 28, 0.05);
  padding: 10px;
  text-align: center;
`;

export const DivEmpty = styled.div`
  height: 30px;
`;
export const Title = styled.h2`
  color: rgba(250, 189, 0, 0.99);
  font-family: ${props => props.theme.fonts.extraBold};
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 1rem;
  font-size: 2em;
`;

export const DivText = styled.div`
  padding: 10px;
`;

export const Text = styled.h5`
  color: rgba(25, 25, 28, 0.8);
  font-family: ${props => props.theme.fonts.extraBold};
  font-weight: 600;
`;

import styled from "styled-components";

export const DivCancel = styled.div`
  display: flex;
  padding: 40px;

  @media (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  @media (min-width: 998px) {
    justify-content: center;
    align-items: center;
  }
`;

export const DivImagen = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const TitleCancel = styled.h4`
  color: rgba(25, 25, 28, 0.8);
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-weight: 800;
  font-size: 1.41575em;
  margin-bottom: 1rem;
`;

export const TextCancel = styled.div`
  font-family: ${(props) => props.theme.fonts.regular};
  text-align: left;
  color: #7a7a7a;
`;
export const Text = styled.p`
  margin: 1rem 0 1rem 0;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const ColorText = styled.span`
  color: #fabd00;
`;

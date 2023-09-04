import styled from "styled-components";

export const DivVideoComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 2rem;
  padding: 0% 12.5% 0% 12.5%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.millionGray};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1.9em;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Iframe = styled.iframe`
  border-radius: 10px 10px 10px 10px;
  width: 100%;
  max-width: 100%;
  width: 100%;
height: 436px;

@media (max-width: 768px) {
  height: 300px;
}
@media (min-width: 998px) {
  height: 576px;
}
@media (max-width: 698px) {
  height: 210px;
}
`;

export const Video = styled.video`
  margin: 0% 0% 5% 0%;
  border-radius: 10px 10px 10px 10px;
  width: 100%;
`;

export const Bold = styled.span`
  font-family: ${(props) => props.theme.fonts.extraBold};
`;

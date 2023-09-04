import styled from "styled-components";

//Main image and text
export const ImgContainer = styled.section`
  background-image: url(https://calmessimple.com.ar/wp-content/uploads/2023/07/portada_localm-1.webp);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 40% 0% 65% 0%;
}
`;

export const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: #000000;
  opacity: 0.09;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-family: ${props => props.theme.fonts.bold};
  font-size: 9.2em;
  font-weight: bold;
  text-transform: none;
  text-decoration: none;
  line-height: 1em;
  letter-spacing: -5px;


  @media (max-width: 768px) {
    font-size: 91px;
}
`;

export const Description = styled.h2`
  color: #ffffff;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 2.5em;
  font-weight: 100;
  line-height: 1em;
  letter-spacing: -0.2px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
}
`;

export const Bold = styled.b`
  font-family: ${props => props.theme.fonts.extraBold};
`



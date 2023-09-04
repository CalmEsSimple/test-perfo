import styled from "styled-components";

export const DivButtonModal = styled.div`
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 0 0 0 1px;
  border-color: #d3d3d3;
`;

export const ContainerModal = styled.div`
  position: relative;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9998;
  }
`;

export const DivModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin: auto;
  border-radius: 12px 12px 12px 12px;
  box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
  z-index: 999999;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;

  @media (max-width: 769px) {
    width: 300px;
  }
`;

export const ImgModal = styled.img`
  cursor: pointer;
  width: 45%;
`;

export const TitleModal = styled.h2`
  color: #fabd00;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 1.7em;
  margin: 0px;

  @media (max-width: 769px) {
    font-size: 1.3em;
  }
`;

export const TextModal = styled.h3`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #999999;
  font-size: 15px;
  font-weight: 500;
  margin-top: 3px;

  @media (max-width: 769px) {
    font-size: 12px;
  }
`;

export const DividorModal = styled.div`
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #c7c7c7;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TitleContentModal = styled.h3`
  color: #303030;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 1.1em;
  font-weight: 800;
  margin-bottom: 0px;
`;

export const TextContentModal = styled.h4`
  font-family: ${(props) => props.theme.fonts.extraBold};
  color: #5700aa;
  font-size:  0.7em;
  font-weight: 800;
  padding-top: 5px;
`;

export const Img = styled.img`
  max-width: 60%;
  height: auto;
`;

export const DivImg = styled.div`
  padding: 10px 10px 0px 0;
`;

export const ButtonClose = styled.button`
  float: right;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  color: grey;
  border: none;
  background: none;
  padding: 0;
`;

export const Bold = styled.b`
  font-family: ${props => props.theme.fonts.extraBold};
`

export const SeePaymentMethods = styled.a`
    color: #368CF0;
    font-size: 0.85rem;
    font-family: ${props => props.theme.fonts.regular};
    text-decoration: none;
    text-transform: lowercase;
    cursor: pointer;
`
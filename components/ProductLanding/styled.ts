import styled from "styled-components";

export const LandingContent = styled.div`
    max-width: 1140px;
    margin: 30px auto;

  @media ${props => props.theme.devices.mobile} {
    margin-top: 10px;
  }
`;

export const ContainerComponent = styled.div<{ $hasBackgroundColor?: boolean }>`
  ${props => props.$hasBackgroundColor && "background-color: #f8f8f8;"}
  width: 100%;
  padding: 30px 0;
`;

export const TitleRest = styled.h2`
  color: ${(props) => props.theme.colors.millionGray};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1.7em;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
  @media ${props => props.theme.devices.mobile} {
    width: 90%;
    margin: 1rem auto;
  }
`;

export const Bold = styled.b`
  font-family: ${(props) => props.theme.fonts.extraBold};
`;

export const DivAccordion = styled.div`
  width: 80%;
  margin: 10px auto;
  text-align: left;
  border-style: none;
  border-width: 1px;
  border-color: #c4c4c4;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0 0 0 0 rgba(0,0,0,.5);

  @media (min-width: 768px) {
    border-style: solid;
  }
`;

export const DivContainerAccordion = styled.div<{ $isLastUnit?: boolean }>`
  width: 100%;
  @media (min-width: 998px) {
    border-style: solid;
    border-width: 0px 0px 1px 0px;
    border-color: #c4c4c4;
    ${props => props.$isLastUnit && "border-radius: 10px;"}
  }
`;

export const DivTitleAccordion = styled.div`
  padding: 1rem 1.2rem;
  cursor: pointer;
`;

export const DivTextAccordion = styled.div`
  color: ${props => props.theme.colors.offBlack};
  font-family: ${props => props.theme.fonts.light};
  font-size: .8em;
`;

export const TittleAccordion = styled.h3`
  padding: 0;
  color: #303030;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 1.2rem;
  font-weight: 800;
  cursor: pointer;
`;

export const DescriptionAccordion = styled.div`
  transition: all 0.35s;
  line-height: 1.5;
  font-weight: 300;
  border-top: solid;
  border-width: 1px 0px 0px 0px;
  border-top-color: #c4c4c4;
  a {
    text-decoration: none;
    color: rgb(250 189 0);
  }
  b {
    font-family: ${props => props.theme.fonts.extraBold};
  }
  p {
    color: ${props => props.theme.colors.millionGray};
    font-family: ${props => props.theme.fonts.light};
    padding: 20px;
    font-size: 1rem;
  }
  ul {
    list-style-type: circle;
    color: ${props => props.theme.colors.millionGray};
    font-family: ${props => props.theme.fonts.light};
    font-size: 1rem;
    margin-left: 2rem;
  }
  
`;
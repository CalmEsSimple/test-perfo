import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const DescriptionColumn = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    @media ${props => props.theme.devices.mobile} {
      width: 100%;
  }
`;

export const ColumnWrapper = styled.div`
    width: 90%;
`;

export const DivAccordion = styled.div`
  width: 100%;
  margin: 10px auto;
  text-align: left;
  border-style: solid;
  border-width: 1px;
  border-color: #c4c4c4;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0 0 0 0 rgba(0,0,0,.5);
`;

export const DivContainerAccordion = styled.div<{$isLastUnit?: boolean}>`
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
  font-family: ${props => props.theme.fonts.bold};
  font-size: 0.9em;
  font-weight: 800;
  cursor: pointer;
`;

export const DescriptionAccordion = styled.div`
  transition: all 0.35s;
  line-height: 1.5;
  font-weight: 300;
  color: #999999;
  border-top: solid;
  border-width: 1px 0px 0px 0px;
  border-top-color: #c4c4c4;
  > a {
    text-decoration: none;
    color: rgb(250 189 0);
  }
  b {
    font-family: ${props => props.theme.fonts.extraBold};
  }
  p {
    color: ${props => props.theme.colors.offBlack};
    font-family: ${props => props.theme.fonts.light};
    padding: 20px;
  }
`;

export const SpecsContainer = styled.div`
  margin-top: 25px;
`;

export const SectionTitle = styled.h2<{$hasProgressBar?: boolean}>`
  font-family: ${props => props.theme.fonts.extraBold};
  color: ${props => props.theme.colors.offBlack};
  font-size: ${props => props.$hasProgressBar ? "1em" : "1.2em"};
  padding-bottom: 1rem;
`;

export const SectionSubitle = styled.p<{$hasProgressBar?: boolean}>`
  font-size: ${props => props.$hasProgressBar ? ".9em" : "1em"};
  color: ${props => props.theme.colors.offBlack};
  font-family: ${props => props.theme.fonts.light};
  margin-top: -40px;
  b {
    font-family: ${props => props.theme.fonts.extraBold};
    padding-bottom: 1rem;
  }

  li {
    margin: 1rem 0 1rem 0.8rem;
  }
`;

const animatePositive = keyframes` 0% { width: 0%; } `;

export const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.superSilver};
  border-radius: 5px;
  margin: 10px 0;
  position: relative;
  height: 35px;
`;

export const ActualProgressBar = styled.div`
  width: 0;
  animation: ${animatePositive} 3s;
  background-color: ${props => props.theme.colors.yellowCalm};
  border-radius: 5px;
`;

export const ProgressBarContent = styled.div`
  position: absolute;
  width: 99%;
  display: flex;
  justify-content: space-between;
`;
export const ProgressBarText = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: .8em;
  line-height: 35px;
  padding: 0 10px;
`;

export const Separator = styled.div<{$hasProgressBar?: boolean}>`
  margin: ${props => props.$hasProgressBar ? "15px 0" : "25px 0"};
  border-top: 1px solid ${props => props.theme.colors.explosiveGray};
  @media ${props => props.theme.devices.mobile} {
    display: none;
  }
`;

export const Img = styled.img`
  width: 95%;
`;

export const MobileImg = styled.img`
  display: none;
  border-radius: 5px;
  margin: 20px 0;
  @media ${props => props.theme.devices.mobile} {
    width: 100%;
    display: flex;
  }
`;

export const SeparatorMobile = styled.div`
  display: none;
  margin: 15px 0;  /* "25px 0" */
  border-top: 1px solid ${props => props.theme.colors.explosiveGray};
  @media ${props => props.theme.devices.mobile} {
    display: block;
  }
`;
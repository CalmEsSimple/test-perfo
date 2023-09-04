import styled from "styled-components";

export const DivContainer = styled.section<{$is30Night?:boolean}>`
  text-align: center;
  margin-bottom: 2rem;
  background-color: ${(props)=>!props.$is30Night&&"#F8F8F8"};
  
  @media (min-width: 998px) {
    padding: 2rem 0 2rem 0;
    
  }
`;

export const Title = styled.h2`
  color:"#999999";
  font-family: ${props => props.theme.fonts.regular};
  font-size: 1.5em;
  font-weight: 100;
  margin: 3rem 0 2rem 0;
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

export const Bold = styled.b<{$is30Night?:boolean}>`
  font-family: ${props => props.theme.fonts.extraBold};
  color:${(props)=>!props.$is30Night?"#999999":"#54595F"};
  font-size:${props=>props.$is30Night?"2rem":"1.5rem"};
  
`

export const DivAccordion = styled.div<{$is30Night?:boolean}>`
  width: ${props=>props.$is30Night?"35%":"70%"};
  margin: auto;
  text-align: left;
  margin-top: ${props=>props.$is30Night&&"3rem"};
  background-color:${props=>props.$is30Night&&"#F8F8F8"};
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (min-width: 998px) {
    border-style: solid;
    border-width: 1px;
    border-color:${props=>props.$is30Night?"white":"#c4c4c4"};
    border-radius:${props=>!props.$is30Night&&"10px"};
    box-shadow: 0 0 0 0 rgba(0,0,0,.5);
  }
`;

export const DivContainerAccordion = styled.div<{$is30night?:boolean}>`
  width: 100%;
    @media (min-width: 998px) {
      border-style: solid;
    border-width: ${props=>props.$is30night?"0px 0px 5px 0px":"0px 0px 1px 0px"};
    border-color:${props=>props.$is30night?"white":"#c4c4c4"};
  }

  @media (max-width: 768px) {
    padding: 0 0 2rem 0;
  }
`;

export const DivTitleAccordion = styled.div`
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  cursor: pointer;
 
`;

export const DivTextAccordion = styled.div`

`;

export const TittleAccordion = styled.h3<{$is30night?:boolean}>`
  padding: 0;
  margin: 0.7rem;
  color:  #303030;
  font-family: ${props => props.theme.fonts.extraBold};
  font-size: 0.9em;
  font-weight: 800;
  cursor: pointer;
`;

export const DescriptionAccordion = styled.div`
  transition: all 0.35s;
  line-height: 1.5;
  padding: 1rem 0 1rem 0;
  font-weight: 300;
  font-family: ${props => props.theme.fonts.regular};
  color: #999999;
  border-top: solid;
  border-width: 1px 0px 0px 0px;
  border-top-color: #c4c4c4; 
  padding: 1rem 30px 0px 2rem;
  margin-bottom: 3rem;


  > div a {

color: rgb(250 189 0);

}
`;
import { styled } from "styled-components";

export const PrimerSection=styled.section`
display: flex;
justify-content: center;
padding: 5rem;
background-color: ${props=>props.theme.colors.superSilver};
`
export const PrimerDiv=styled.div`
display: flex;
justify-content: center;
color:${props=>props.theme.colors.yellowCalm};
padding-bottom: 1.2rem;
`
export const PrimerTitle=styled.h1`
font-family: ${props=>props.theme.fonts.light};
font-size: 1.9rem;
`
export const PrimerCaption=styled.p`
max-width: 45rem;
color:${props=>props.theme.colors.thamarBlack};
font-size: 1.2rem;
font-family: ${props=>props.theme.fonts.extraBold};
display: flex;
text-align: center;

`
export const PasoAPaso=styled.h2`
color:${props=>props.theme.colors.offBlack};
font-family:${props=>props.theme.fonts.regular};
font-size: 1.9rem;
text-align: center;
padding-top: 8rem;
padding-bottom: 1rem;
`
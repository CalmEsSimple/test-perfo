import styled from "styled-components";

export const PrincipalSection=styled.section`
background-color:${props=>props.theme.colors.superSilver};    
display:flex;
padding:10px;
flex-direction:column;
font-family:${props=>props.theme.fonts.bold};
`
export const CaptionSection=styled.section`
padding: 1.7rem;
`
export const H3 =styled.h3`
font-family:${props=>props.theme.fonts.extraBold};
font-size: 1.1rem;
color: ${props=>props.theme.colors.thamarBlack};
`

export const PrincipalDiv=styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 3rem;
`
export const Title=styled.h1`
color: ${props=>props.theme.colors.yellowCalm};
font-size: 2.6em;
display:flex;
justify-content:center;
text-align: center;
font-family: ${props=>props.theme.fonts.regular};

`

export const ComponentContent=styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 2rem;
`

export const DivComponentContent=styled.div<{$position?:boolean}>`
display: flex;
max-width: 70rem;
gap:1rem;
padding:2.7rem 0;
@media ${props=>props.theme.devices.biggerMobile}{
    flex-direction:${props=>props.$position?"row":"row-reverse"};
    text-align: left;
    padding: 1rem;
}    
@media ${props=>props.theme.devices.mobile}{
    flex-direction:${props=>props.$position?"column":"column-reverse"};
    align-items: center;
    
}    
`
export const DivImg=styled.div`
padding:0 6rem;
width: 5rem;
display: flex;
justify-content: center;
img{
    object-fit: contain;
}

`
export const TextDiv=styled.p<{$isLeft?:boolean}>`
text-align: ${(props)=>props.$isLeft?"left":"right"};
padding: 0.6rem 0;
color: ${props=>props.theme.colors.millionGray};
max-width: 45rem;
`
export const TextTitle=styled.h2<{$isLeft?:boolean}>`
text-align: ${(props)=>props.$isLeft?"left":"right"};
font-family: ${props=>props.theme.fonts.light};
color:${props=>props.theme.colors.thamarBlack};
font-size:2rem;
padding-bottom: 1rem;
`

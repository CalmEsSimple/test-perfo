import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    justify-content:start;
    flex-direction: column;
    margin-bottom:50px;
    margin-top: 30px;
    height:300px;
    
    @media ${props => props.theme.devices.mobile} {
        align-items:center;
        height:100%;
        margin-bottom: 30px;
    }
`;

export const FooterNewsletterTitle = styled.p`
    color: ${props => props.theme.colors.offBlack};
    font-size: 1.25rem;
    font-family: ${props => props.theme.fonts.extraBold};
    
`;

export const SuscribeForm = styled.div`
    display: flex;
    flex-direction:row;
    height: 45px;
    margin-top:10px;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
    }
`;

export const ErrorText = styled.p`
    color: red;
    margin-top: 0.5em;
    text-align: center;
`;

export const SuscribeInput = styled.input<any>`
    border: ${props => props.with_border ? "1px solid black" : ""};
    position:relative;
    border-radius: 8px 0 0 8px;
    width:100%;
    padding:15px;
    font-size:0.9rem;
    outline: none;
`;

export const SuscribeButton = styled.button<any>`
    width: ${props => props.with_border ? "95px" : "50px"};
    background-color: ${props => props.theme.colors.offBlack};
    color: #fff;
    border-radius: 0 8px 8px 0px;
    border: ${props => props.with_border ? "1px solid black" : ""};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.yellowCalm};
        border-color: ${props => props.theme.colors.yellowCalm};
    }
`;

export const Socials = styled.div`
    display:flex;
    justify-content:center;
    margin-top:25px;
`;

export const SocialDiv = styled.div`
    background-color: ${props => props.theme.colors.offBlack};
    border-radius: 50px;
    height:30px;
    width:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:5px;
`;

export const IconHolder = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    margin-top:20px;
`;

export const ChildrenIconHolder = styled.div`
    height:40px;
    width:40px;
    margin:0px 10px 0px 10px;
`;

export const ImgIcon = styled.img`
    height:100%;
    width: 100%;
`;

export const SocialIcon = styled.img`
    height: 1.1em;
    margin-top: 3px;
`;

export const ArrowIcon = styled.img`
    height: 70%;
    margin-top: 3px;
`;

export const ThankMsg = styled.p < { $center?: boolean } > `
    text-align: ${props => props.$center ? "center" : "left"};
    font-weight: 600;
    color: #2A2A2A;
    margin-top: 8px;
`;
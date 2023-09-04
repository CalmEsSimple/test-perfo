import styled from "styled-components";

export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export const Title = styled.h2`
    width: 60%;
    color: ${props => props.theme.colors.offBlack};
    font-family: ${props => props.theme.fonts.extraBold};
    text-align: center;
    font-size: 2.1em;
    font-weight: 600;
    @media ${props => props.theme.devices.biggerMobile} {
        width: 100%;
        font-size: 1.5em;
    }
`;

export const Subtitle = styled.p`
    width: 83%;
    color: ${props => props.theme.colors.offBlack};
    text-align: center;
    font-size: 1.1em;
    font-weight: 200;
    line-height: 1.2em;
    margin: 2em 0;
    b {
        font-family: ${props => props.theme.fonts.extraBold};
        font-weight: 600;
    }
    @media ${props => props.theme.devices.biggerMobile} {
        width: 100%;
        font-size: 1em;
    }
`;

export const Separator = styled.div<{$hasProgressBar?: boolean}>`
    width: 65%;
    margin-bottom: 2em;
    border-top: 1px solid ${props => props.theme.colors.black};
`;

export const InputCP = styled.input`
    padding: 12px 7px;
    border-width: 0px;
    box-shadow: 0px -2px 2px #e4e4e4;
    background-color: #f4f4f4;
    display: flex;
    margin: auto;
    font-family: ${(props) => props.theme.fonts.medium};
    font-size: 1em;
    width: 15em;
    text-align: center;
    outline-color: #fabd00;
`

export const Message = styled.p<{$error?: boolean}>`
  margin-top: 1rem;
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 1em;
  color: ${props => props.$error ? "#fd4242" : "#40914d"};
  text-align: center;
`;
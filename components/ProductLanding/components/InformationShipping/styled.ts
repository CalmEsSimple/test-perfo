import styled from "styled-components";

export const DivInformationShipping = styled.div`
    margin-bottom: 0.5rem;
`

export const Text = styled.a`
    font-size: 0.7rem;
    color: #40914D;
    font-weight: 800;
    font-family: ${props => props.theme.fonts.regular};
    margin-bottom: 0.5rem;
    cursor: pointer;
    text-decoration: underline;
    
`

export const InputCP = styled.input`
    padding: 0.6em;
    background-color: #f2f2f2;
    color: #43454b;
    border: 0;
    font-size: 0.85rem;
    font-family: ${props => props.theme.fonts.regular};
    border-radius: 0.3rem;
    margin-bottom: 0.2rem;
    margin-top: 0.5rem;
`

export const ButtonCP = styled.button`
    background-color: ${props => props.theme.colors.yellowCalm}; ;
    border: 0;
    color: #ffffff;
    font-family: ${props => props.theme.fonts.regular};
    cursor: pointer;
    padding: 0.6em 1.2em;
    text-decoration: none;
    text-shadow: none;
    display: inline-block;
    border-radius: 0.3rem;
`
export const DeliverDate = styled.p`
    font-size: 0.8rem;
    line-height: 0px;
    color: #40914D;
    margin: 0.5rem;
    font-weight: 800;
    font-family: ${props => props.theme.fonts.regular};
`
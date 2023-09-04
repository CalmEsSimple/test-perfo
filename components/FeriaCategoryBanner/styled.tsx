import styled from "styled-components";

export const Banner = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.yellowCalm};
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 2em 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 3em;
`;

export const Title = styled.h2`
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.bold};
    font-size: 2em;
    font-weight: 700;
`;

export const Subtitle = styled.p`
    color: ${props => props.theme.colors.white};
    font-size: 0.9em;
    font-weight: 100;
`;

export const DivButton = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;


export const Button = styled.a`
    margin-bottom:1rem ;
    font-size: 1.2vw;
    font-weight: 700;
    font-family: ${props => props.theme.fonts.extraBold};
    text-decoration: none;
    fill: #fabd00;
    color: ${props => props.theme.colors.yellowCalm};
    background-color: #fff;
    border-style: solid;
    border-width: 1px;
    border-color: #fabd00;
    border-radius: 8px 8px 8px 8px;
    padding: 10px 60px 10px 60px;
    font-weight: 800 !important;
    display: inline-block;

    &:hover {
        color: white;
        background-color: #5700aa;
        transform: scale(0.9);
        transition: transform 0.3s ease;
        transform-origin: center;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        background-color: #5700aa;
        border-color: #5700aa;
        font-weight: 600;
        align-items: center;
        color: ${props => props.theme.colors.white};
        font-size: 1em;
        padding: 9px 33px 9px 33px;
        border-radius: 20px 20px 20px 20px;

        &:hover {
            color: ${props => props.theme.colors.white};
            transform: initial;
            background-color: #5700aa;
            cursor: pointer;
        }
    }
`;
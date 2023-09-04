import styled from "styled-components";

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 1rem 0 2rem 1rem;
`;

export const Address = styled.h3`
    color: ${props => props.theme.colors.offBlack};
    font-size: 1.2rem;
    font-family: ${props => props.theme.fonts.extraBold};
    letter-spacing: 0.5px;
        
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

export const Hours = styled.h4`
    color: #999999;
    font-size: 1.2em;
    letter-spacing: 0.5px;
    font-family: ${props => props.theme.fonts.light};
            
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const UrlMaps = styled.a`
    color: #803F80;
`;

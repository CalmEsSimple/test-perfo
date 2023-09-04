import styled from 'styled-components';

export const ContainerComponent = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  padding: 30px 0;
`;

export const Container = styled.div<{$isCombo?: boolean}>`
  width: 90%;
  background-color: #fff;
  margin: auto;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: ${props => props.$isCombo ? "row-reverse" : "row"};
  justify-content: space-evenly;
  @media ${props => props.theme.devices.mobile} {
    align-items: center;
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  width: 50%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.devices.mobile} {
    width: 100%;
  }
`;

export const Title = styled.p`
  font-weight: 200;
  color: ${props => props.theme.colors.offBlack};
  font-size: 1.7em;
  margin-bottom: 20px;
  @media ${props => props.theme.devices.mobile} {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
`;

export const BoldTitle = styled.b<{$isCombo?: boolean}>`
  font-weight: 600;
  font-family: ${props => props.theme.fonts.extraBold};
  ${props => props.$isCombo && "color: #999999;text-align: center;"}

`;

export const Description = styled.p`
  color: ${props => props.theme.colors.millionGray};
  font-size: 1.1em;
  @media ${props => props.theme.devices.mobile} {
    font-size: .9em;
  }
`;

export const BoldDescription = styled(Description)`
  font-weight: 600;
  font-family: ${props => props.theme.fonts.extraBold};
  @media ${props => props.theme.devices.mobile} {
    margin-bottom: 20px;
  }
`;
  
export const VideoWrapper = styled.div`
  width: 50%;
  max-width: 450px;
  @media ${props => props.theme.devices.mobile} {
    width: 100%;
  }

  @media (min-width: 1300px) {
    max-width: 500px;
    width: 60%;
  }
`;
  
export const Iframe = styled.iframe`
  width: 100%;
  max-width: 450px;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  border: 0;

  @media (min-width: 1300px) {
    max-width: 700px;
  }
`;

export const VideoImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;


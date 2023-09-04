import styled from "styled-components";

export const DivSleepTest = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  max-width: 1100px;
  margin: auto;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.lynxWhite};
  border-radius: 15px 15px 15px 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 12px 10px 12px;
    background-color: #f4f4f4;
  }
`;

export const DivImage = styled.div`
  width: 55%;
  height: auto;

  @media (max-width: 768px) {
    width: 95%;
    order: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export const Img = styled.img`
  width: 80%;
  max-width: 100%;
  height: auto;
  border-radius: 10px 10px 10px 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DivTexto = styled.div`
  padding: 25px 70px 37px 70px;
  text-align: left;
  width: 45%;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0px;
    order: 2;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.offBlack};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 2.2em;
  font-weight: 100;
  line-height: 1em;
  letter-spacing: -0.2px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;

export const Text = styled.h2`
  color: ${(props) => props.theme.colors.offBlack};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 18px;
  font-weight: 100;
  line-height: 1.3em;
  letter-spacing: -0.2px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReserveButton = styled.a`
  display: inline-block;
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 1.1em;
  font-weight: 600;
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.dullViolet};
  border-radius: 8px 8px 8px 8px;
  padding: 24px 55px 25px 55px;
  color: white;
  letter-spacing: 0.3px;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: ${(props) => props.theme.colors.dullViolet};
  border-radius: 6px 6px 6px 6px;
  padding: 0.7em 4em 0.8em 4em;

  &:hover {
    background-color: ${(props) => props.theme.colors.lynxWhite};
    transition: 0.3s;
    color: ${(props) => props.theme.colors.dullViolet};
    cursor: pointer;
  }
`;

export const SeeMoreButton = styled.a`
  margin-top: 5px;
  display: inline-block;
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 0.9em;
  text-decoration: none;
  letter-spacing: 0.3px;
  fill: ${(props) => props.theme.colors.dullViolet};
  color: ${(props) => props.theme.colors.dullViolet};
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: ${(props) => props.theme.colors.lynxWhite};
  border-radius: 6px 6px 6px 6px;
  padding: 0.7em 4em 0.8em 4em;

  &:hover {
    cursor: pointer;
  }
`;

export const Bold = styled.span`
  font-family: ${(props) => props.theme.fonts.extraBold};
`;

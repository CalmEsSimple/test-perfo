import styled from "styled-components";

export const SectionImgDescButt = styled.section`
  max-width: 1000px;
  margin: auto;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const DivImgDescButt = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px 0px 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px 20px 10px;
  }
`;

export const DivInfo = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0px;
  }
`;

export const DivImage = styled.div``;

export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 20px 20px 20px 20px;
`;

export const Title = styled.h4`
  color: #e98a05;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 1.5em;
  font-weight: 800;
  min-height: 43px;
  line-height: 1;
  margin: 1.1rem 0 1.1rem 0;

  @media (max-width: 768px) {
    text-align: center;
    min-height: 0px;
    font-size: 1.15em;
    letter-spacing: 0.6px;
    margin: 16px 0 20px 0;
  }
`;

export const Text = styled.p`
  color: #303030;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 0.90em;
  font-weight: 100;
  text-decoration: none;
  line-height: 1.1em;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1.25rem;
    font-size: 0.7em;
  }
`;

export const Button = styled.a`
  font-family: ${(props) => props.theme.fonts.extraBold};
  font-size: 1.1rem;
  font-weight: 800;
  text-decoration: none;
  fill: #e98a05;
  color: #e98a05;
  background-color: #ffffff;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 6px 6px 6px 6px;
  padding: 6.5px 0;
  width: 100%;
  display: block;
  text-align: center;

  > span {
    font-family: ${(props) => props.theme.fonts.extraBold};
  }
  &:hover {
    color: #ffffff;
    background-color: #fabd01;
    transition: 0.3s;
  }
`;

import Image from "next/image";
import styled from "styled-components";

export const DivShipment = styled.section`
  background-color: #e28303;
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const DivImage = styled.div`
  width: 25%;
  @media (max-width: 1023px) and (min-width: 768px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {

    height: auto;
    padding: 10px;
  }
`;

import styled from "styled-components";

export const DivMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    width: 90%;
    margin-right: 0;
  }
`;

// export const Iframe = styled.iframe`
//   border-width: 0px;
//   border-radius: 18px 18px 18px 18px;
//   width: 100%;
//   height: 320px;
//   max-width: 100%;
//   line-height: 1;
//   border: none;
//   margin-left: 30px;
//   cursor: url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur), default;

//   @media (max-width: 768px) {
//     margin-left: 0px;
//   }
// `;

export const ImageMap = styled.img`
  width: 100%;
  max-width: 680px;
  border-radius: 15px;
`;

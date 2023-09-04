import styled from "styled-components";

export const DivReviews = styled.section`
  padding: 0% 12.5% 0% 12.5%;
  margin-top: 4rem;

  @media (max-width: 769px) {
    padding: 0% 2% 0% 2%;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  color: rgba(25, 25, 28, 0.8);
  font-family: ${(props) => props.theme.fonts.extraBold};
  text-align: center;
  font-weight: 800;
  font-size: 2em;
  margin-bottom: 1rem;
`;

interface TabProps {
  show: string
  id: string
  name: string
}

export const DivReviewsTabs = styled.div`
    border: 1px solid #d4d4d4;
    padding: 20px;
    margin-top: -2px;
`

export const TabsContent = styled.div<TabProps>`
  display: ${props => props.show === props.name ? "initial" : "none"};
`;


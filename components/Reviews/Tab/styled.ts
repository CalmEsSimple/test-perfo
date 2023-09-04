import styled from "styled-components";

export const DivTab = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SelectedCategory = styled.label`
  color: #999999;
  font-size: 0.8em;
  font-family: ${props => props.theme.fonts.extraBold};
  font-weight: 600;
  cursor: pointer;
  padding: 15px;

  @media (max-width: 769px) {
    padding: 5px;
    text-align: center;
  }
`;

export const Category = styled.input`
  display: none;
  cursor: pointer;

  &:checked + ${SelectedCategory} {
    border-style: solid solid none;
    border-color: #d4d4d4;
    border-width: 1px;
    border-bottom: 2px solid  white;
    color: #FABD00;
  }
`;

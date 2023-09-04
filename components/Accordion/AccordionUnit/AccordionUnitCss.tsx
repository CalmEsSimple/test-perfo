import Image from "next/image";
import styled from "styled-components";

export const Inner = styled.div<{$isFAQPage?: boolean}>`
  position: absolute;
  font-family: ${props => props.theme.fonts.regular};
  ${props => props.$isFAQPage && "padding: 5px 20px 20px 10px;"};
  > b {
    font-family: ${props => props.theme.fonts.extraBold};
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivIconPlus = styled.div<{$isFAQPage?: boolean}>`
  width: 100%;
  display: flex;
  justify-content: ${props => props.$isFAQPage ? "flex-start" : "space-between"};
  flex-direction: ${props => props.$isFAQPage ? "row" : "row-reverse"};
`

interface IconProps {
  $isActive?: boolean;
}

export const Icon = styled.span<IconProps>`
  transform: rotate(${(props) => (props.$isActive ? -180 : 0)}deg);
  transition: all 0.2s;
  text-decoration: inherit;
`;

interface ImgRotateProps {
  $isActive?: boolean;
}

export const ImgRotate = styled(Image)<ImgRotateProps>`
  transform: rotate(${(props) => (props.$isActive ? -180 : 0)}deg);
  transition: all 0.2s;
`;
interface ImgStaticProps {
  $isActive?: boolean;
}

export const ImgStatic = styled(Image)<ImgStaticProps>`

`;

export const Content = styled.div<{$isActive?: boolean, $itemName: string, $render?: boolean}>`
  position: relative;
  overflow: hidden;
  transition: height 0.5s;
  height: 0;
  height: ${(props) => {
    if(props.$render) {
      const inner = document.getElementById(props.$itemName);
      return `${props.$isActive && inner ? inner.scrollHeight  : 0}px`;
    }
  }};
`;
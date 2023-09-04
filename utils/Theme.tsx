import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
//Go to:
//https://colornamer.robertcooper.me/
//To get color names
export const theme = {
  colors: {
    yellowCalm: "#FABD01",
    white: "#FFFFFF",
    black: "#000000",
    offBlack: "#303030",
    dullViolet: "#823f90",
    explosiveGray: "#c4c4c4",
    coldMorning: "#e5e5e5",
    millionGray: "#999",
    carbon: "#333",
    blackOut: "#222",
    lynxWhite: "#f6f7f8",
    superSilver: "#eee",
    steam: "#ddd",
    thamarBlack: "#191919CC"
  },
  fonts: {
    regular: "Gilroy-Regular",
    medium: "Gilroy-Medium",
    bold: "Gilroy-Bold",
    extraBold: "Gilroy-ExtraBold",
    light: "Gilroy-Light"
  },
  devices: {
    mobile: "(max-width: 768px)",
    biggerMobile: "(max-width: 1024px)"
  }
};

export const deviceSizes = {
  mobile: 1024
}

const Theme = ({ children }: {children: ReactNode}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
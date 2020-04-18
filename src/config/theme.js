import { DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: "#42B9D7",
    secondary: "#98D0D7",
    accent: "#E38271",
    background: "#E28255",
    surface: "#FAF9F7",
    text: "#282552",
    backdrop: "#FAF9F7",
  },
};

export default theme;

import { StyleSheet } from "react-native";

const makeStyles = (themeProps: ReactNativePaper.Theme) =>
  StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      backgroundColor: themeProps.colors.primary,
    },
  });

export default makeStyles;

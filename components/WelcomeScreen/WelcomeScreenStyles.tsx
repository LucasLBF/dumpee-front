import { StyleSheet } from "react-native";

const makeStyles = (themeProps: ReactNativePaper.Theme) => {
  return StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: 16,
      backgroundColor: themeProps.colors.primary,
    },
    titleContainer: { flex: 1, justifyContent: "flex-end" },
    title: { fontFamily: "Poppins", fontSize: 50, color: "#E3F2DC" },
    imgContainer: { flex: 2 },
    bottomContainer: {
      flex: 3,
      alignItems: "center",
      width: "100%",
    },
    welcomeTitle: {
      fontFamily: "PoppinsSemi",
      fontSize: 40,
      color: "#FFF1CD",
      marginBottom: 20,
    },
    welcomeTextContainer: {
      paddingHorizontal: 64,
      marginBottom: 56,
    },
    welcomeText: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: "#FFF1CD",
      textAlign: "center",
    },
    startButtonContainer: {
      justifyContent: "center",
      width: "100%",
      height: 50,
      backgroundColor: "#FFF1CD",
      borderRadius: 6,
    },
    startButtonText: {
      textAlign: "center",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: 14,
      color: "#335D42",
    },
  });
};

export default makeStyles;

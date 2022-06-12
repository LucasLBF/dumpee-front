import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const makeStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: 16,
      backgroundColor: theme.colors.primaryGreen,
    },
    titleContainer: { flex: 1, justifyContent: "flex-end" },
    title: { fontFamily: "Poppins", fontSize: 50, color: "#E3F2DC" },
    imgContainer: {
      flex: 3,
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    image: {
      marginLeft: 32,
    },
    bottomContainer: {
      flex: 3,
      alignItems: "center",
      width: "100%",
    },
    welcomeTitle: {
      fontFamily: "PoppinsSemi",
      fontSize: 40,
      color: theme.colors.primaryBeige,
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
      backgroundColor: theme.colors.primaryBeige,
      borderRadius: 6,
    },
    startButtonText: {
      textAlign: "center",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: 14,
      color: theme.colors.primaryGreen,
    },
  });
};

export default makeStyles;

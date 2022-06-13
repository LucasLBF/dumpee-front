import { useTheme } from "react-native-paper";
import { StyleSheet, Dimensions } from "react-native";

const makeStyles = () => {
  const theme = useTheme();
  const height = Dimensions.get("window").height;
  return StyleSheet.create({
    formContainer: {
      backgroundColor: theme.colors.light.surface2,
      height: height,
      padding: 16,
    },
    formHeader: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 16,
      marginBottom: 16,
    },
    headerCenter: {
      alignItems: "center",
      marginTop: 8,
    },
    formTitle: {
      fontFamily: "Poppins",
      fontSize: 22,
      color: theme.colors.primaryGreen,
      marginTop: 11,
    },
    closeIcon: {
      position: "absolute",
      right: 16,
      top: 16,
    },
    tutorialTextContainer: {
      marginBottom: 31,
    },
    formTutorialHeaderText: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: "#464646",
      textAlign: "center",
    },
    formTutorialText: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: "#464646",
      marginBottom: 8,
    },
    continueButton: {
      backgroundColor: theme.colors.primaryGreen,
      borderRadius: 8,
      width: "100%",
      height: 44,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 16,
    },
    continueButtonText: {
      fontFamily: "Roboto",
      color: "#fff",
    },
  });
};

export default makeStyles;

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
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    formTitle: {
      fontFamily: "Poppins",
      fontSize: 22,
      color: theme.colors.primaryGreen,
      marginBottom: 8,
    },
    closeIcon: {
      color: theme.colors.light.onSurfaceVariant,
      position: "absolute",
      top: 0,
      right: 0,
    },
    DPContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    DPValue: {
      fontFamily: "Poppins",
      fontSize: 24,
      fontWeight: "bold",
      marginRight: 8,
    },
    DPIcon: {
      aspectRatio: 0.4,
      resizeMode: "contain",
    },
    formText: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: "#464646",
      marginBottom: 8,
    },
    formImageContainer: {
      alignItems: "center",
    },
    formImage: {
      aspectRatio: 0.9,
      resizeMode: "contain",
      marginTop: -24,
    },
    optionsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: 24,
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

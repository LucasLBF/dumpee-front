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
      justifyContent: "space-between",
      padding: 16,
      marginBottom: 16,
    },
    formTitle: {
      fontFamily: "Poppins",
      fontSize: 22,
      color: theme.colors.primaryGreen,
      marginTop: 11,
    },
    formIcon: {
      color: theme.colors.light.onSurfaceVariant,
    },
    textInputContainer: {
      marginBottom: 58,
    },
    inputControl: {
      marginBottom: 16,
    },
    inputLabelText: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: theme.colors.light.onPrimaryContainer,
      marginBottom: 4,
    },
    input: {
      backgroundColor: "#fff",
      borderRadius: 8,
      padding: 8,
      borderWidth: 1,
      borderColor: "#335D42",
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

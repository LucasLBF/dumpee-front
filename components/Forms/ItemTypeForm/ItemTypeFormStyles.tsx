import { useTheme } from "react-native-paper";
import { StyleSheet, Dimensions } from "react-native";

const makeStyles = () => {
  const theme = useTheme();
  const height = Dimensions.get("screen").height;
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
    formIcon: {
      color: theme.colors.light.onSurfaceVariant,
    },
    itemOptionIcon: {
      color: "#464646",
    },
    itemOptionText: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: "#1C1C18",
      marginLeft: 32,
    },
    headerCenter: {
      alignItems: "center",
      marginBottom: 16,
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
      fontSize: 16,
      color: "#464646",
      textAlign: "center",
    },
    itemOption: {
      flexDirection: "row",
      backgroundColor: theme.colors.light.primaryContainer2,
      padding: 13,
      borderRadius: 8,
      marginBottom: 8,
    },
  });
};

export default makeStyles;

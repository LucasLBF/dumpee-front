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
    },
    formTitle: {
      fontFamily: "Poppins",
      fontSize: 22,
      color: theme.colors.primaryGreen,
      marginTop: 11,
    },
    closeIcon: {
      color: theme.colors.light.onSurfaceVariant,
      position: "absolute",
      top: 0,
      right: 0,
    },
    textContainer: {},
    formText: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: "#464646",
      marginBottom: 8,
    },
    formImageContainer: {
      alignItems: "center",
      justifyContent: "flex-start",
    },
    formImage: {
      aspectRatio: 0.6,
      resizeMode: "contain",
    },
    optionsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: 24,
    },
    optionButton: {
      backgroundColor: theme.colors.primaryGreen,
      borderRadius: 14,
      paddingHorizontal: 32,
      paddingVertical: 8,
      justifyContent: "center",
      marginRight: 12,
    },
    optionButtonText: {
      fontFamily: "Roboto",
      color: "#fff",
    },
  });
};

export default makeStyles;

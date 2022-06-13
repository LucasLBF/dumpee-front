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
    formText: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: "#464646",
      marginBottom: 28,
      textAlign: "center",
    },
    formOptionsContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 32,
    },
    formOption: {
      aspectRatio: 0.9,
      resizeMode: "contain",
    },
  });
};

export default makeStyles;

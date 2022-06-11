import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const makeStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    signUpContainer: {
      flex: 1,
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.primaryBeige,
    },
    avatarContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "center",
      flex: 1,
      marginBottom: 64,
    },
    formContainer: {
      width: "100%",
      flex: 2,
    },
    formInput: {
      backgroundColor: "#fff",
      marginBottom: 19,
    },
    inputText: {
      color: theme.colors.primaryGreen,
      fontSize: 14,
      fontFamily: "Roboto",
      marginBottom: 4,
    },
    avatarIcon: {
      backgroundColor: theme.colors.primaryBeige,
    },
    changeAvatarButton: {
      backgroundColor: theme.colors.light.primary,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: -32,
    },
    submitButton: {
      width: "50%",
      backgroundColor: theme.colors.light.primary,
      borderRadius: 10,
      alignSelf: "center",
      marginTop: 32,
    },
    submitButtonDisabled: {
      width: "50%",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      borderRadius: 10,
      alignSelf: "center",
      marginTop: 32,
    },
  });
};

export default makeStyles;

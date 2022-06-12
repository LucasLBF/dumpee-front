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
    profilePicContainer: {
      backgroundColor: theme.colors.light.surfaceVariant,
      width: 150,
      height: 150,
      borderRadius: 100,
      overflow: "hidden",
      position: "relative",
    },
    avatarIcon: {
      color: theme.colors.dark.onSurfaceVariant,
      position: "absolute",
      left: -15,
      bottom: -30,
    },
    editAvatarButton: {
      backgroundColor: theme.colors.light.primary,
      width: 50,
      height: 50,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: -38,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
      elevation: 6,
    },
    editIcon: {
      color: theme.colors.light.onPrimary,
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

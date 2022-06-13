import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

const makeStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    formContainer: {
      backgroundColor: theme.colors.light.surface2,
    },
  });
};

export default makeStyles;

import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const makeStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    bottomTabContainer: {
      backgroundColor: theme.colors.light.surface2,
    },
  });
};

export default makeStyles;

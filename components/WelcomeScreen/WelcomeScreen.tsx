import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import makeStyles from "./WelcomeScreenStyles";

const WelcomeScreen = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.background}>
      <Text>Dumpee</Text>
    </View>
  );
};

export default WelcomeScreen;

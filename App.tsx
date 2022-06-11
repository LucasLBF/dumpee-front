import { StyleSheet, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#335D42",
    accent: "#FFF1CD",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <WelcomeScreen />
      </View>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

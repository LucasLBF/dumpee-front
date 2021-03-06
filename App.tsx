import { StyleSheet } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./AppNavigator";

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      dark: {
        primary: string;
        onPrimary: string;
        onPrimaryContainer: string;
        primaryContainer: string;
        secondary: string;
        onSecondary: string;
        onSurfaceVariant: string;
      };
      light: {
        primary: string;
        onPrimary: string;
        onPrimaryContainer: string;
        primaryContainer: string;
        primaryContainer2: string;
        secondary: string;
        onSecondary: string;
        onSurface: string;
        surfaceVariant: string;
        surface2: string;
        onSurfaceVariant: string;
      };
      primaryBeige: string;
      primaryGreen: string;
      backgroundModal: string;
    }
  }
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    dark: {
      primary: "#7BDA9D",
      onPrimary: "#00391C",
      onPrimaryContainer: "#96F7B7",
      primaryContainer: "#00522B",
      secondary: "#FFB686",
      onSecondary: "#522300",
      onSurfaceVariant: "#C1C9C0",
    },
    light: {
      primary: "#006d3c",
      onPrimary: "#FFFFFF",
      onPrimaryContainer: "#00210E",
      primaryContainer: "#A0F8BE",
      primaryContainer2: "#E3F2DD",
      secondary: "#964909",
      onSecondary: "#FFFFFF",
      onSurface: "#1C1C18",
      surfaceVariant: "#DCE5DB",
      surface2: "#FEFCF3",
      onSurfaceVariant: "#414942",
    },
    primary: "rgba(0, 109, 60, 0.12)",
    primaryBeige: "#FFF1CD",
    primaryGreen: "#335D42",
    backgroundModal: "#FEFCF3",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

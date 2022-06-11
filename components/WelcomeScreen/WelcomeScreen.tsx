import { Text, View, Pressable } from "react-native";
import { useTheme } from "react-native-paper";
import makeStyles from "./WelcomeScreenStyles";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useState, useEffect, useCallback } from "react";

const WelcomeScreen = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Poppins: require("../../assets/fonts/Poppins-Medium.ttf"),
          PoppinsSemi: require("../../assets/fonts/Poppins-SemiBold.ttf"),
          Roboto: require("../../assets/fonts/Roboto-Medium.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.background} onLayout={onLayoutRootView}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Dumpee</Text>
      </View>
      <View style={styles.imgContainer}></View>
      <View style={styles.bottomContainer}>
        <Text style={styles.welcomeTitle}>Bem-Vinde!</Text>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>
            Dê o destino correto aos eletroeletronicos que não usa mais, ajude o
            planeta e ainda ganhe prêmios!
          </Text>
        </View>
        <Pressable
          style={styles.startButtonContainer}
          onPress={() => console.log("next screen")}
        >
          <Text style={styles.startButtonText}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;

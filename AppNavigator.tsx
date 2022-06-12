import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import SignUpScreen from "./components/SignUpScreen/SignUpScreen";
import BottomTabs from "./components/BottomTabs/BottomTabs";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen name="SignUp" component={SignUpScreen} />
        <Screen name="MainApp" component={BottomTabs} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

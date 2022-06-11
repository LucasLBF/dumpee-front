import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import SignUpScreen from "./components/SignUpScreen/SignUpScreen";

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
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

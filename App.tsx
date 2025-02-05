import { useEffect } from "react";
import { ImageBackground, StatusBar, StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";

import theme from "./src/theme";

import { SignIn } from "./src/screens/Signin";
import { Loading } from "./src/components/Loading";
import React from "react";

export default function App() {
  // const androidClientId = process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID;
  // console.log(androidClientId);

  // tela de splash
  useEffect(() => {
    // const prepare = async () => {
    //   await new Promise((resolve) => setTimeout(resolve, 2000));
    //   await SplashScreen.hideAsync();
    // };
    // prepare();
    SplashScreen.preventAutoHideAsync();

    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 3000);
  }, []);

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <View>
        <ImageBackground
          source={require("./assets/splash-icon.png")}
          style={styles.background}
          resizeMode="cover"
        />
      </View>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <SignIn />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

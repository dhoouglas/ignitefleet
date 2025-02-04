import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "./src/theme";

import { SignIn } from "./src/screens/Signin";
import { Loading } from "./src/components/Loading";

import Config from "react-native-config";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  console.log(Config.ANDROID_CLIENT_ID);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </ThemeProvider>
  );
}

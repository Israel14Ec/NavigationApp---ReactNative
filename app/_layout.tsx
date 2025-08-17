import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "./global.css";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//Splash que se muestra mientras se carga las fuentes
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    " WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar />
      <GestureHandlerRootView>
        <Slot />
      </GestureHandlerRootView>
    
      {/* <Slot /> */}
      {/* <Stack /> */}
    </>
  );
};

export default RootLayout;

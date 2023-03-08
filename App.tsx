import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Main } from './src/index';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Sora_100Thin,
  Sora_200ExtraLight,
  Sora_300Light,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
  Sora_800ExtraBold
} from '@expo-google-fonts/sora';
import { SafeAreaView } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sora-100': Sora_100Thin,
    'Sora-200': Sora_200ExtraLight,
    'Sora-300': Sora_300Light,
    'Sora-400': Sora_400Regular,
    'Sora-500': Sora_500Medium,
    'Sora-600': Sora_600SemiBold,
    'Sora-700': Sora_700Bold,
    'Sora-800': Sora_800ExtraBold
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <Main />
      </SafeAreaView>
    </React.Fragment>
  );
}

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
import AppStack from './src/routes/AppStack';
import AppLoading from './src/pages/AppLoading';

export default function App() {
  let [fontLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  })

  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style='dark' />
      </>
    );
  }

}
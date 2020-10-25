import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
import AppStack from './src/routes/AppStack';
import AppLoading from './src/pages/AppLoading';
import { Text } from 'react-native'
import moment from 'moment';
import 'moment/locale/pt-br'

// @ts-ignore
Text.defaultProps = Text.defaultProps || {}
// @ts-ignore
Text.defaultProps.allowFontScaling = false

export default function App() {
  moment().locale('pt-br')
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
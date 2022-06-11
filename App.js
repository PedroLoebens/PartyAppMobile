import * as React from 'react';
import { View, Text } from 'react-native';
import { Navbar } from './src/components/NavBar';
import AppLoading from 'expo-app-loading';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';


function App() {
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <Navbar></Navbar>
  );
}

export default App;
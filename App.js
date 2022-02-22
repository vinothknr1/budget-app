import 'react-native-gesture-handler';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen1 from './screens/OnBoardingScreen1.js';
import OnBoardingScreen2 from './screens/OnBoardingScreen2.js';
import SignInScreen from './screens/SignInScreen.js';

const fetchFonts = () => {
  return Font.loadAsync({
    popregular: require('./fonts/Poppins-Regular.ttf'),
    popbold: require('./fonts/Poppins-Bold.ttf'),
    popblack: require('./fonts/Poppins-Black.ttf'),
  });
};

const Stack = createStackNavigator();
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='OnBoarding1' component={OnBoardingScreen1} />
          <Stack.Screen name='OnBoarding2' component={OnBoardingScreen2} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

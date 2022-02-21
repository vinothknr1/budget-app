import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';

const fetchFonts = () => {
  return Font.loadAsync({
    popregular: require('./fonts/Poppins-Regular.ttf'),
    popbold: require('./fonts/Poppins-Bold.ttf'),
    popblack: require('./fonts/Poppins-Black.ttf'),
  });
};

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
      <View style={styles.container}>
        <Text style={styles.title}>
          Budget App Basic Code (Production Mode){' '}
        </Text>
        <StatusBar style='auto' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'popbold',
  },
});

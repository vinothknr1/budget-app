import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>SignInScreen Work is On Progress</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'popbold',
    textAlign: 'center',
    marginVertical: 100,
    fontSize: 30,
  },
});

export default SignInScreen;

import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OnBoardingScreen1 = (props) => {
  return (
    <View>
      <Image
        source={require('../images/onboardingimage1.png')}
        style={styles.image}
      />
      <View style={styles.firstcontainer}>
        <Text style={styles.headertext}>Spend your money smarter</Text>
        <Text style={styles.subheadertext}>
          Never overspend your money again with smart budgeting feature.
        </Text>
      </View>

      <View style={styles.secondcontainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            props.navigation.navigate('OnBoarding2');
          }}
        >
          <Text style={styles.btntext1}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            props.navigation.navigate('SignIn');
          }}
        >
          <Text style={styles.btntext2}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstcontainer: {
    paddingHorizontal: 60,
  },
  secondcontainer: {},
  headertext: {
    fontFamily: 'popbold',
    fontSize: 24,
    textAlign: 'center',
    color: '#111827',
    marginTop: 30,
  },
  subheadertext: {
    fontFamily: 'popregular',
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
  image: {
    marginTop: 150,
    height: 306,
    width: 406,
    resizeMode: 'contain',
  },
  button1: {
    backgroundColor: '#7500AB',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 32,
    marginHorizontal: 32,
    borderRadius: 12,
  },
  btntext1: {
    color: '#fff',
    fontFamily: 'popbold',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
  button2: {
    backgroundColor: '#F6E3FF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 16,
    marginHorizontal: 32,
    borderRadius: 12,
  },
  btntext2: {
    color: '#7500AB',
    fontFamily: 'popbold',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default OnBoardingScreen1;

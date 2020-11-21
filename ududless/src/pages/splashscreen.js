import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

import logo from '../assets/img/logo.png';

const splashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `#ffb6c1`,
  },
  logo: {
    width: 181,
    height: 189,
  },
});

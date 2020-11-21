import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import welcome from '../assets/img/welcome.png';

const welcomepage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mid}>
        <Image source={welcome} style={styles.welcome} />
        <Text style={styles.selamat}>Selamat datang wahai sobat!</Text>
      </View>
      <View style={styles.square}></View>
      <TouchableOpacity
        onPress={() => alert('Halaman SignUp')}
        style={[styles.signup, {backgroundColor: '#FFFFFF'}]}>
        <Text style={styles.textbutton}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Loginpage')}
        style={[styles.login, {backgroundColor: '#FFFFFF'}]}>
        <Text style={styles.textbutton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default welcomepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#FDE0E0`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mid: {
    top: 70,
    backgroundColor: `#FDE0E0`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    width: 288,
    height: 148,
  },
  selamat: {
    color: `#4F4F4F`,
    fontSize: 14,
    fontWeight: 'bold',
  },
  square: {
    backgroundColor: 'rebeccapurple',
    top: 250,
    width: 432,
    height: 300,
    borderRadius: 50,
    backgroundColor: '#FDAAAA',
  },
  signup: {
    backgroundColor: '#FFFFFF',
    top: 20,
    width: 221,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  login: {
    backgroundColor: '#FFFFFF',
    top: 40,
    width: 221,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  textbutton: {
    color: `#333333`,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

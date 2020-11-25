import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import logo_kecil from '../assets/img/logo_kecil.png';

const loginpage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => alert('test')}>
          <Icon style={styles.arrow} name="keyboard-arrow-left" size={35} />
          <Text style={styles.exit}>Exit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logo}>
        <Image source={logo_kecil} style={styles.logo_kecil} />
      </View>

      <View style={styles.mid}>
        <View style={styles.square}>
          <Text style={styles.judul}>Hello</Text>
          <Text style={styles.subjudul}>Sign into your account</Text>
          <Text
            style={[styles.forgot, {color: '#828282'}]}
            onPress={() => alert('lupa')}>
            Forgot your password?
          </Text>
          <View style={styles.input}>
            <Text style={[styles.labelemail, {color: '#828282'}]}>Email</Text>
            <TextInput style={styles.inputemail}></TextInput>
            <Text style={[styles.labelpassword, {color: '#828282'}]}>
              Password
            </Text>
            <TextInput style={styles.inputpassword}></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => alert('Halaman Login')}
            style={styles.login}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: '#000'}}>
          Don’t have an account?{' '}
          <Text
            onPress={() => {
              alert('Register');
            }}
            style={{color: '#F97C7C'}}>
            {' '}
            Register Now
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default loginpage;

const styles = StyleSheet.create({
  //top
  container: {
    flex: 1,
    backgroundColor: `#FFF3F3`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    top: 20,
    position: 'absolute',
  },
  arrow: {
    marginRight: 380,
  },
  exit: {
    marginLeft: 30,
    bottom: 28,
  },
  logo: {
    bottom: 40,
  },
  logo_kecil: {
    height: 107,
    width: 102,
  },

  // mid (form)
  mid: {
    top: 20,
    alignItems: 'center',
  },
  square: {
    backgroundColor: '#FFFFFF',
    width: 400,
    height: 450,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    bottom: 35,
  },
  judul: {
    fontSize: 36,
  },
  subjudul: {
    fontSize: 14,
  },
  input: {
    top: 280,
  },
  labelemail: {
    bottom: 250,
  },
  inputemail: {
    bottom: 260,
    width: 350,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
  },
  labelpassword: {
    bottom: 230,
  },
  inputpassword: {
    bottom: 240,
    width: 350,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
  },
  forgot: {
    top: 230,
    left: 100,
  },
  login: {
    backgroundColor: '#F97C7C',
    top: 140,
    width: 140,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
});

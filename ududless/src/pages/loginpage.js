import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const loginpage = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.square}>
          <Text style={styles.judul}>Hello</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default loginpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#FFF3F3`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    backgroundColor: '#FFFFFF',
    width: 400,
    height: 400,
    borderRadius: 10,
    alignItems: 'center',
  },
  judul: {},
});

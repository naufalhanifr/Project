import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

const slides = [
  {
    key: '1',
    title: 'Hidup Sehat',
    text: 'Menjalani hidup sehat tanpa rokok',
    image: require('../assets/img/one.png'),
  },
  {
    key: '2',
    title: 'Tracking Progress',
    text: 'Kamu bisa melihat progress seberapa lama kamu \n telah berhenti',
    image: require('../assets/img/two.png'),
  },
  {
    key: '3',
    title: 'Forum',
    text: 'Kamu bisa bergabung ke forum diskusi',
    image: require('../assets/img/three.png'),
  },
];

export default class onboarding extends Component {
  state = {showHomePage: false};
  _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.top1container}>
          {item.key == 1 && (
            <TouchableOpacity onPress={() => alert('test')}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
          )}
          {item.key == 2 && (
            <TouchableOpacity onPress={() => alert('test')}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.top2container}>
          {item.key == 2 && (
            <TouchableOpacity onPress={() => alert('test')}>
              <Icon name="keyboard-arrow-left" size={35} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.top3container}>
          {item.key == 3 && (
            <TouchableOpacity onPress={() => alert('test')}>
              <Icon name="keyboard-arrow-left" size={35} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.logocontainer}>
          <Image source={item.image} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <View style={styles.bot3container}>
          {item.key == 3 && (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Welcomepage')}
              style={styles.buttonCircle}>
              <Icon name="done" size={35} color="#FDE0E0" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  render() {
    if (this.state.showRealApp) {
      return <onboarding />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          activeDotStyle={{left: -150, bottom: 70, backgroundColor: '#F97C7C'}}
          dotStyle={{left: -150, bottom: 70, backgroundColor: '#FDE0E0'}}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  top1container: {
    bottom: 120,
    left: 180,
  },
  top2container: {
    bottom: 145,
    right: 180,
  },
  top3container: {
    bottom: 105,
    right: 180,
  },
  logocontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  botcontainer: {
    top: 105,
    left: 150,
  },
  bot2container: {
    top: 100,
    left: 150,
  },
  bot3container: {
    top: 70,
    left: 150,
  },
  title: {
    paddingTop: 40,
    paddingBottom: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4F4F4F',
  },
  text: {
    fontSize: 14,
    color: '#4F4F4F',
    textAlign: 'center',
  },
  skip1: {
    fontSize: 15,
    color: '#333333',
  },
  buttonCircle: {
    width: 56,
    height: 56,
    backgroundColor: '#F97C7C',
    borderRadius: 100,
    shadowColor: '#000000',
    shadowRadius: 6,
    shadowOpacity: 2,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

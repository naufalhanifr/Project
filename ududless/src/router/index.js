import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import splashscreen from '../pages/splashscreen';
import onboarding from '../pages/onboarding';
import welcomepage from '../pages/welcomepage';
import loginpage from '../pages/loginpage';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={splashscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcomepage"
        component={welcomepage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Loginpage"
        component={loginpage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});

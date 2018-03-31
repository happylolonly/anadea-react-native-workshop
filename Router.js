import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from './src/screens/Welcome/Welcome';
import List from './src/screens/List/List';
import Event from './src/screens/EventScreen/EventScreen';


export default StackNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    List: {
      screen: List,
    },
    Event: {
      screen: Event,
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);
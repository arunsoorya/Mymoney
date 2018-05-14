import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Icon } from 'native-base'
import hometab from './tabs/hometab'
import profiletab from './tabs/profiletab'
import { TabNavigator } from 'react-navigation'

export default class mainscreen extends Component {

  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <AppTabNavigator />
    );
  }
}

const AppTabNavigator = TabNavigator({
  hometab: {
    screen: hometab
  },
  profiletab: {
    screen: profiletab
  }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#000',
      showLabel: false,
      inActiveTintColor: '#d2cece',
      showIcon: true
    }
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#000000',
  },
  content1: {
    paddingLeft: 10
  }
});

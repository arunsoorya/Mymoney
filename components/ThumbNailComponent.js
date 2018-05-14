import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Thumbnail} from 'native-base'

export default class ThumbNailComponent extends Component {
  render() {
    return (
      <Thumbnail source={require('../assets/b1.jpg')} style={styles.imageStyle}/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imageStyle: {
    marginHorizontal: 7,
    borderColor: 'white',
    borderWidth: 3,
  }
});

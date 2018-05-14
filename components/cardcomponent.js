import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {Card, CardItem,Body, Left, Right, Thumbnail, Button, Icon} from 'native-base'

export default class cardcomponent extends Component {
  render() {
    return (
      <Card>
      <CardItem>
          <Left >
            <Thumbnail source = {require('../assets/b1.jpg')}/>
            <Body>
             <Text>Arun kumar</Text>
             <Text>jan1 2018</Text>
             <Text>jan2 2018</Text>
            </Body>
          </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source = {require('../assets/b1.jpg')}
              style={{height:200, width:null, flex:1}} />
      </CardItem>
      <CardItem style={styles.navItems}>
        <Button transparent >
          <Icon name='ios-heart-outline' style={{color:'black'}} />
        </Button>
        <Button transparent>
          <Icon name='ios-heart-outline' style={{color:'black'}} />
        </Button>
        <Button transparent>
          <Icon name='ios-heart-outline' style={{color:'black'}} />
        </Button>
      </CardItem>
      <CardItem cardBody>
        <Text style={{padding:10}}>{this.props.likes} likes</Text>
      </CardItem>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navItems:{
     height: 55,
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'flex-start',
  }

});

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Icon, Container, Left, Body, Right, Header, Content, Button } from 'native-base'

export default class profiletab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='person' style={{ color: tintColor }} />
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      buttonActiveIndex:0
    }
  }
  onButtonClicked = (index) => {
    this.setState({
      buttonActiveIndex: index
    })
  }
  render() {
    return (

      <Container style={styles.container}>
        <Header>
          <Left><Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} /> </Left>
          <Body><Text>My Profile</Text></Body>
          <Right> <Icon name="ios-send-outline" style={{ paddingLeft: 10 }} /></Right>
        </Header>
        <Content>
          <View style={styles.profileBar}>
            <Button transparent
              active={this.state.buttonActiveIndex == 0}
              onPress={() => this.onButtonClicked(0)}>
              <Icon name="ios-camera-outline" style={[this.state.buttonActiveIndex == 0 ? {} : { color: 'grey' }]} />
            </Button>
            <Button transparent
              active={this.state.buttonActiveIndex == 1}
              onPress={() => this.onButtonClicked(1)}>
              <Icon name="ios-send-outline" style={[this.state.buttonActiveIndex == 1 ? {} : { color: 'grey' }]} />
            </Button>
            <Button transparent
              active={this.state.buttonActiveIndex == 2}
              onPress={() => this.onButtonClicked(2)}>
              <Icon name="ios-camera-outline" style={[this.state.buttonActiveIndex == 2 ? {} : { color: 'grey' }]} />
            </Button>
            <Button transparent
              active={this.state.buttonActiveIndex == 3}
              onPress={() => this.onButtonClicked(3)}>
              <Icon name="ios-send-outline" style={[this.state.buttonActiveIndex == 3 ? {} : { color: 'grey' }]} />
            </Button>
          </View>
        </Content>
      </Container>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  profileBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'grey'
  }
});

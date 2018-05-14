import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base'
import CardComponent from '../cardcomponent'
import ThumbNailComponent from '../ThumbNailComponent'

export default class hometab extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-home' style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left><Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} /> </Left>
          <Body><Text> My Money</Text></Body>
          <Right> <Icon name="ios-send-outline" style={{ paddingLeft: 10 }} /></Right>
        </Header>
        <Content>
          <View style={{ height: 100 }}>
            <View style={styles.storiesHeaderStyle}>
              <Text>Stories</Text>
              <Text>Watch All</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: '#ccc' }}>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={
                  { alignItems: 'center', paddingStart: 5, paddingEnd: 5 }
                }>
                <ThumbNailComponent imageName='b1.jpg' />
                <ThumbNailComponent imageName='b1.jpg' />
                <ThumbNailComponent imageName='b1.jpg' />
                <ThumbNailComponent imageName='b1.jpg' />
                <ThumbNailComponent imageName='b1.jpg' />
                <ThumbNailComponent imageName='b1.jpg' />
                <ThumbNailComponent imageName='b1.jpg' />
              </ScrollView>
            </View>
          </View>

          <CardComponent likes="102" />
          <CardComponent likes="103" />
          <CardComponent likes="104" />
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  storiesHeaderStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  }

});

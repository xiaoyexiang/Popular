/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class Popular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            selectedTitleStyle={{color: '#f00'}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}/>}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#f00'}]} source={require('./res/images/ic_polular.png')}/>}
            badgeText="1"
            onPress={() => this.setState({selectedTab: 'home'})}>
            <View style={styles.page1}><Text>Home</Text></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            selectedTitleStyle={{color: '#f0f'}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')}/>}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#f0f'}]} source={require('./res/images/ic_trending.png')}/>}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <View style={styles.page2}><Text>Profile</Text></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00',
  },
  page2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f',
  },
  image: {
    width: 20,
    height: 20
  }
});

AppRegistry.registerComponent('Popular', () => Popular);

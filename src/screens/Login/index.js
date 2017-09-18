/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import Signin from '../Signin';
import Signup from '../Signup';
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            menu
        </Text>
        <Button
        title="signin"
        color="black"
        onPress={()=>this.props.navigation.navigate('Signin')}
        ></Button>
        <Button
        title="signup"
        color="black"
        onPress={()=>this.props.navigation.navigate('Signup')}
        ></Button>
      </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    width: 26,
    height: 26,
  },
});

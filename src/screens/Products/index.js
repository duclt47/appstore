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
import HeaderBar from './../../components/HearderBar';
export default class Products extends Component {
  static navigationOptions = {
    header:null,
    tabBarIcon: ({ tintColor }) => (
      <Image
          source={require('./../../assets/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapheader}>
          <HeaderBar/>
        </View>
        <View style={styles.body}>
          <Text style={styles.welcome}>
              products
          </Text>
          <Button
          title="DrawerOpen"
          color="black"
          onPress={()=>this.props.navigation.navigate('DrawerOpen')}
          ></Button>
          <Button
          title="stack"
          color="black"
          onPress={()=>this.props.navigation.navigate('ProductsDetail')}
          ></Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  wrapheader: {
    flex: 2
  },
  body : {
    flex: 8
  },
  icon: {
    width:26,
    height:26
  }
});


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import menu from './../../assets/menu.png';
import icon1 from './../../assets/icon1.png';
import Input from './../comon/Input';
export default class HearderBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <Image style={styles.icon} source={menu}/>
          <Text style={styles.title}>text somethink</Text>
          <Image style={styles.icon} source={icon1}/>
        </View>
        <View style={styles.row2}>
          <Input/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f94c6',
    padding: 20,
  },
  row1: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row2: {
    flex: 0.5
  },
  icon: {
    width: 26,
    height: 26,
    tintColor: '#fff',
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },

});


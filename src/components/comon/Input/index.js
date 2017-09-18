/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View
} from 'react-native';

export default class Input extends Component {
  render() {
    return (
      <View style={styles.container}>
          <TextInput style={styles.input} placeholder='write something'></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    fontSize: 20,
    padding: 10
  }
});


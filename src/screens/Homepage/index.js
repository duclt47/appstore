/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  ScrollView
} from 'react-native';
import HeaderBar from './../../components/HearderBar';
import Well from './../../components/comon/Well';
import menu from './../../assets/menu.png';
import home from './../../assets/home.png';

// import {color} from'../../style/color';
// import styles from './HomepageWrapper';
export default class HomePage extends Component {
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
    // var color = 'red';
    return (
      <View style={styles.container}>
        <View style={styles.wrapheader}>
          <HeaderBar/>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <Well titleWell='spring colection'
              img={home}
            />
            <Well/>
          </ScrollView>
          
          {/* <Button
          title="DrawerOpen"
          color="black"
          onPress={()=>this.props.navigation.navigate('DrawerOpen')}
          ></Button>
          <Button
          title="stack"
          color="black"
          onPress={()=>this.props.navigation.navigate('Products')}
          ></Button> */}
          {/* <Text style={{color:`${color}`}}>asd</Text> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7ea',
  },
  wrapheader: {
    flex: 2
  },
  body : {
    flex: 8,
    padding :10
  },
  icon: {
    width:26,
    height:26
  }
});

AppRegistry.registerComponent('appstore', () => appstore);

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
  ScrollView,
} from 'react-native';

import HomePage from './src/screens/Homepage';
import Cart from './src/screens/Cart';
import UserInformation from './src/screens/UserInformation';
import Login from './src/screens/Login';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import Products from './src/screens/Products';
import ProductsDetail from './src/screens/ProductsDetail';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

const tabs = TabNavigator({
  Home: {
    screen: HomePage,
  },
  Cart: {
    screen: Cart,
  },
  Info:{
    screen: UserInformation,
  },
});

const stacks = StackNavigator({
  tabbar: {
    screen: tabs
  },
  Signin: {
    screen: Signin,
  },
  Signup: {
    screen: Signup,
  },
  Products: {
    screen: Products,
  },
  ProductsDetail: {
    screen: ProductsDetail,
  },
});

const appstore = DrawerNavigator({
  tabbar: {
    screen: stacks,
  },
},
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: props => <ScrollView><Login {...props} /></ScrollView>
  }
)

AppRegistry.registerComponent('appstore',()=>appstore)

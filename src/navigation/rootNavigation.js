import React, { Component } from 'react';
import { StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation';


import Login from '../views/login';
import Register from '../views/register';

import MainTabNavigator from './MainTabNavigator';

export const Stack = StackNavigator({
  login:         { screen: Login, navigationOptions  : { header: null } }, 
  register:      { screen: Register, navigationOptions  : { header: null } }, 
},{
  initialRouteName: ""
});

export const AppStack = TabNavigator(
  { screen: MainTabNavigator, },
  { navigationOptions: {
      headerStyle: { backgroundColor: '#BEBEBE', },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold', },
  },
  header: {
    style: {
      backgroundColor: '#42a5f5',
    }
  },
}
);
// #f4511e

  export const createRootNavigator = () => {
    return SwitchNavigator(
      {
        SignedIn:  { screen: Stack },
        SignedOut: { screen: AppStack }
      },
      {
        initialRouteName: "SignedIn"
      }
    );
  };



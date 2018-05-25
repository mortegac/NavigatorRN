import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createRootNavigator } from './navigation/rootNavigation';


export default class App extends React.Component {
  render() {
    const Layout = createRootNavigator();
    return (
        <Layout/>
       );
  }
  
}

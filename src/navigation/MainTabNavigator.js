import React from 'react';
import { Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import {tabIconSelected, tabIconDefault, tabHeader} from '../constants/colorPalette';


import HomeScreen from '../views/authHome';
import SettingScreen from '../views/authSetting';

export default TabNavigator(
  {
    Home:  { screen: HomeScreen, },
    Setting:  { screen: SettingScreen, },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'list';
            break;
          case 'Setting':
            iconName = 'settings';
            break;                                      
        }
        return (
          <Feather 
            name={iconName} 
            color={ focused ? '#000': '#BEBEBE' } 
            size={ 26 } 
            style={{ marginBottom: -3, width: 25 }}
            />
          );
       
      },
    }),
    tabBarOptions: {
      tinColor: '#000',
      activeTintColor: '#000',
      inactiveTintColor: '#BEBEBE',
      backgroundColor: 'transparent',
      showIcon: true,
      showLabel: true,
      lazyLoad: true,
      upperCaseLabel: false,
      indicatorStyle: { backgroundColor: 'transparent' },
      style: {
        backgroundColor: '#F7F7F7',
        borderTopWidth:1,
        borderTopColor:'#D3D3D3'
       
      },
      indicatorStyle: {
          backgroundColor: 'red',
      },
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    
  }
);




// check state.index
const TabBar = (props) => {
  console.log('----props--', props)
  const { navigationState } = props;

  let newProps = props;
  if (navigationState.index === 0) {
    newProps = Object.assign(
      {},
      props,
      {
        style: {
          backgroundColor: 'rgba(0,0,0,0.1)',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#bbb',
      },
    );
  }

  return <TabBarBottom {...newProps} />;
};
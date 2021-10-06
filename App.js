import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import InstaScreen from './screens/in';
import FacebookScreen from './screens/fb';


export default class  App extends React.Component {
  
  render(){
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Instagram : {screen:InstaScreen},
  Facebook : {screen:FacebookScreen}
})

const AppContainer = createAppContainer(TabNavigator)
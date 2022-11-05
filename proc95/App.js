import React, {Component }from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import BuzzerScreen from './screens/BuzzerScreen';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
        
      </View>
    );
  }
}
let customFonts = {
  "PTSBOLD": require("./assets/PTSansNarrow-Bold.ttf")
};


var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  BuzzerScreen:BuzzerScreen
  
});

const AppContainer = createAppContainer(AppNavigator);
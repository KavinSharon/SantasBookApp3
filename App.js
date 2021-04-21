import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import WelcomeScreen from './Screens/WelcomeScreen'
import {AppTabNavigator} from './components/AppNavigator'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import {SafeAreaProvider} from 'react-native-safe-area-context'
export default class App extends React.Component {
  render(){
  return (
    <SafeAreaProvider>
    
      <AppContainer />
       
    </SafeAreaProvider>
  );
}
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator},
})

const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

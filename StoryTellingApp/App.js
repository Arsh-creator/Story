import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './Drawer'

export default class App extends React.Component{
  render(){
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
}
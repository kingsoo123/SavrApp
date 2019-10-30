import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import SetupCardScreen from '../screens/SetupCard';


const TabNavigator = createBottomTabNavigator({
    SetupCard: SetupCardScreen,
  });
  
  export default createAppContainer(TabNavigator);
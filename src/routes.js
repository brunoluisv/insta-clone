import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from './navigation/HomeStackScreen';
import NotifyStackScreen from './navigation/NotifyStackScreen';

const Tabs = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Notify" component={NotifyStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
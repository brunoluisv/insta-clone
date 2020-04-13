import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo, FontAwesome } from '@expo/vector-icons';

import HomeStackScreen from './navigation/HomeStackScreen';
import NotifyStackScreen from './navigation/NotifyStackScreen';
import SearchStackScreen from './navigation/SearchStackScreen';
import ProfileStackScreen from './navigation/ProfileStackScreen';
import PostStackScreen from './navigation/PostStackScreen';

const Tabs = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#181818"
        barStyle="light-content"
      />
      <Tabs.Navigator 
        tabBarOptions={{
          style: {
            backgroundColor: '#181818'
          },
          showLabel: false
        }}
      >
        <Tabs.Screen 
          name="Home" 
          component={HomeStackScreen} 
          options={{
            tabBarIcon: () => (
              <Entypo name="home" size={30} color="#FFF" style={{ padding: 20 }}/>
            )
          }}  
        />
        <Tabs.Screen 
          name="Search" 
          component={SearchStackScreen} 
          options={{
            tabBarIcon: () => (
              <FontAwesome name="search" size={30} color="#FFF" style={{ padding: 20 }}/>
            )
          }}
        />
        <Tabs.Screen 
          name="Post" 
          component={PostStackScreen} 
          options={{
            tabBarIcon: () => (
              <FontAwesome name="plus-square-o" size={34} color="#FFF"/>
            )
          }}
        />
        <Tabs.Screen 
          name="Notify" 
          component={NotifyStackScreen} 
          options={{
            tabBarIcon: () => (
              <FontAwesome name="heart" size={30} color="#FFF" style={{ padding: 20 }}/>
            )
          }}
        />
        <Tabs.Screen 
          name="Profile" 
          component={ProfileStackScreen} 
          options={{
            tabBarIcon: () => (
              <FontAwesome name="user" size={30} color="#FFF" style={{ padding: 20 }}/>
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
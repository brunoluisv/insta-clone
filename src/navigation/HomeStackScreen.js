import React from 'react';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home'

import logoTitle from '../assets/font.png';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#181818'
          },
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image style={{width: 110, height: 40, marginTop: 8, resizeMode: 'contain'}} source={logoTitle}/>
          ),
          headerLeft: () => (
            <Feather name="camera" size={30} color="#FFF" style={{ padding: 20 }}/>
          ),
          headerRight: () => (
            <Feather name="send" size={28} color="#FFF" style={{ padding: 20 }}/>
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStackScreen;
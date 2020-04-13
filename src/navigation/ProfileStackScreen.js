import React from 'react';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../pages/Profile'

import logoTitle from '../assets/font.png';

const Stack = createStackNavigator();

const ProfileStackScreen = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Profile" 
        component={Profile}
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

export default ProfileStackScreen;
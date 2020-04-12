import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notify from '../pages/Notify';

const Stack = createStackNavigator();

const NotifyStackScreen = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Notify" component={Notify}/>
    </Stack.Navigator>
  )
}

export default NotifyStackScreen;
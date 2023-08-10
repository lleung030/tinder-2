import { createNativeStackNavigator } from './NativeStackNavigator'; 
import { View, Text } from 'react-native'
import React from 'react'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../navigators/BottomTabNavigator';
// import BottomTabNavigator from '../screens/CartScreen';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Tab' component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from '../screens/SignInScreen/SignInScreen';

const Stack = createStackNavigator();
export const AuthStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};

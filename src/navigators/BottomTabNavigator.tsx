import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import CartScreen from '../screens/CartScreen';
import HistoryScreen from '../screens/HistoryScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import {COLORS} from '../theme/theme';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="home"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
            />
          ),
        }}
        component={HomeScreen}></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="shoppingcart"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
            />
          ),
        }}
        name="Cart"
        component={CartScreen}></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="book"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
            />
          ),
        }}
        name="Favorite"
        component={FavoriteScreen}></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="sync"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
            />
          ),
        }}
        name="History"
        component={HistoryScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
});

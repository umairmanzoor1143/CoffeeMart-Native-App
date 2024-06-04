import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAuth} from '../../contexts/Auth';

const CartScreen = () => {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };
  return (
    <View>
      <Text>CartScreen</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});

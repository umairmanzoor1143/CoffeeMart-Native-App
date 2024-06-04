import React, { useState } from 'react';
import { ActivityIndicator, Button, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { GoogleIcon } from '../../assets/svg';
import { styles } from './styles';
import { useAuth } from '../../contexts/Auth';
export const SignInScreen = () => {
  const [loading, isLoading] = useState(false);
  const auth = useAuth();
  const signIn = async () => {
    isLoading(true);
    await auth.signIn();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/images/app-backgroud.png')}
      />

      <View style={styles.buttonContainer}>
        {/* {userInfo && <Text style={{ color: "#fff" }}>{userInfo}</Text>} */}
        <Text style={styles.TextTitle}>Coffee so good, your taste buds will love it.</Text>
        <Text style={styles.TextDiscription}>
          The best grain, the finest roast, the powerful flavor.
        </Text>

        {loading ? (
          <View>
            <ActivityIndicator color={'#fff'} animating={true} size='small' />
          </View>
        ) : (
          <View style={styles.SignInBtn} onTouchStart={signIn}>
            <View style={styles.GoogleIcon}>
              <GoogleIcon />
            </View>
            <Text style={styles.SignInText}>Continue with Google</Text>
          </View>
        )}
      </View>
    </View>
  );
};

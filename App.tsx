import React from 'react';
import { SafeAreaView, StatusBar, Text, View, useColorScheme } from 'react-native';
import { Router } from './src/routes/Router';
import { AuthProvider } from './src/contexts/Auth';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import AsyncStorage from "@react-native-async-storage/async-storage";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{ ...backgroundStyle, ...{ flex: 1 } }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </SafeAreaView>
  );
}
export default App;

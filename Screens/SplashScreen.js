import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <ImageBackground source={require('../assets/logo.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.logoText}>GreenGuard</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
  },
});

export default SplashScreen;

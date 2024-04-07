import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: '#0bce83' }, { height: windowHeight * 0.3 }]}>
        <Image source={require('../assets/background.png')} style={styles.backgroundImage} />
        <Text style={styles.headerText}>Welcome to GreenGuard!</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Take a photo or upload a photo</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ScanScreen')}>
          <Text style={styles.buttonText}>Start Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chatBtn}
          onPress={() => navigation.navigate('ChatScreen')}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/botLogo.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  headerText: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    top: '50%',
    left: '5%',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.02,
  },
  box: {
    width: '80%',
    height: windowHeight * 0.2,
    backgroundColor: '#F7FCF7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.03,
    marginBottom: windowHeight * 0.02,
  },
  boxText: {
    fontSize: windowWidth * 0.05,
  },
  vectorIcon: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
  },
  button: {
    backgroundColor: '#0bce83',
    paddingVertical: windowHeight * 0.03,
    paddingHorizontal: windowWidth * 0.1,
    borderRadius: windowWidth * 0.02,
    marginBottom: windowHeight * 0.02,
  },
  buttonText: {
    color: '#fff',
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
  },
  chatBtn: {
    width: windowWidth * 0.14,
    height: windowWidth * 0.14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.07,
    backgroundColor: '#0bce83',
    position: 'absolute',
    bottom: windowHeight * 0.05,
    right: windowWidth * 0.05,
    zIndex: 1,
    elevation: 2,
  },
  tooltip: {
    position: 'absolute',
    top: -windowHeight * 0.08,
    opacity: 0,
    backgroundColor: 'rgb(255, 180, 82)',
    color: 'white',
    padding: windowWidth * 0.02,
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatBtnText: {
    fontSize: windowWidth * 0.04,
    color: '#fff',
  },
});

export default HomeScreen;

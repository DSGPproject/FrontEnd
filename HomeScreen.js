import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Welcome!</Text>
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
        <Text style={styles.buttonText}>Chat</Text>
        <View style={styles.tooltip}>
          <Text>Chat with support</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  box: {
    width: '80%',
    height: 150,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  boxText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatBtn: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#FFE53B',
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,
    elevation: 2,
  },
  tooltip: {
    position: 'absolute',
    top: -40,
    opacity: 0,
    backgroundColor: 'rgb(255, 180, 82)',
    color: 'white',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatBtnText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default HomeScreen;

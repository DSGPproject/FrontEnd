import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, TextInput, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const correctUsername = 'user123';
  const correctPassword = 'pass';

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid Credentials', 'Please enter correct username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: '#0bce83' }, { height: windowHeight * 0.4 }]}>
        <Image source={require('../assets/background.png')} style={styles.backgroundImage} />
        <Image source={require('../assets/logo.png')} style={styles.logoImage} />
        <Text style={styles.contentTitle}>GreenGuard</Text>
      </View>
        
      <View style={styles.content}>
        <Text style={[styles.title]}>Login</Text>
        <Text style={[styles.text]}>
          Please sign in to your account to continue
        </Text>
        <TextInput
          style={[styles.usernameBox]}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="#c8c8c8"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[styles.passwordbox]}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor="#c8c8c8"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={[styles.loginbutton]}
          activeOpacity={0.2}
          onPress={handleLogin}
        >
          <Text style={styles.login}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#F7FCF7',
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
  loginbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    marginLeft: windowHeight * 0.05,
    marginTop: windowHeight * 0.04,
    height: windowHeight * 0.07,
    width: windowWidth * 0.78,
    borderRadius: 10,
    backgroundColor: '#0bce83',
    
  },
  login: {
    color: '#fff',
    fontSize: windowWidth * 0.04,
    textAlign: "center",
    fontWeight: "bold",
  },
  usernameBox: {
    marginLeft: windowHeight * 0.05,
    paddingLeft: windowWidth * 0.08,
    marginTop: windowHeight * 0.05,
    height: windowHeight * 0.07,
    width: windowWidth * 0.78,
    shadowOpacity: 1,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: windowWidth * 0.04,
  }, 
  passwordbox: {
    marginLeft: windowHeight * 0.05,
    paddingLeft: windowWidth * 0.08,
    marginTop: windowHeight * 0.02,
    height: windowHeight * 0.07,
    width: windowWidth * 0.78,
    shadowOpacity: 1,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: windowWidth * 0.04,
  }, 
  title: {
    fontSize: windowWidth * 0.08,
    paddingLeft: windowWidth * 0.08,
    marginTop: windowHeight * 0.03,
    color: '#000',
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
  },
  text: {
    marginTop: windowHeight * 0.005,
    paddingLeft: windowWidth * 0.08,
    color: '#9a9a9a',
    fontSize: windowWidth * 0.03,
  },
  headerText: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    top: '30%',
    left: '5%',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '200%',
    resizeMode: 'cover',
  },
  logoImage: {
    position: 'absolute',
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
  },
  content: {
    flex: 1,
    width: '100%',
  },
  contentTitle: {
    color: '#fff',
    fontSize: windowWidth * 0.08,
    fontWeight: 'bold',
    marginTop: windowHeight * 0.26,
  },
  vectorIcon: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
  },
  button: {
    backgroundColor: '#0bce83',
    paddingVertical: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.05,
    borderRadius: windowWidth * 0.02,
  },
  buttonText: {
    color: '#fff',
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
  },
});

export default Login;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: '#0bce83' }, { height: windowHeight * 0.25 }]}>
        <Image source={require('../assets/background.png')} style={styles.backgroundImage} />
        <Text style={styles.headerText}>Welcome to GreenGuard!</Text>
      </View>
        
      <LinearGradient
        colors={["#b0ffcb", "#eae7e7"]}
        style={[styles.box, { marginTop: -(windowHeight * 0.1) }]}>

        <View style={styles.topicContainer}>
          <Text style={styles.boxTitle}>Diagnose a tea plant disease</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.boxDescription}>Take a photo of the tea plant leaf or upload a photo to diagnose diseases</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/TeaPlant.png")}
              style={styles.teaPlantImage}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ScanScreen')}>
          <Text style={styles.buttonText}>Start Scan</Text>
        </TouchableOpacity>
      </LinearGradient>
      
      <View style={styles.content}>
        <Text style={styles.contentTitle}>
          Get Started
        </Text>
        <Text style={styles.contentText}>
          To get started, simply tap the "Start Scan" button above to begin scanning plant leaves or upload existing photos. Need assistance? Tap the chat button to chat with our knowledgeable bot.
        </Text>
        <Text style={styles.contentTitle}>
          Instructions
        </Text>
        <Text style={styles.contentText}>
        1. Tap the "Start Scan" button to begin.
        </Text>
        <Text style={styles.contentText}>
        2. Use your device's camera to capture clear photos of plant leaves.
        </Text>
        <Text style={styles.contentText}>
        3. Ensure the leaf is well-lit and positioned in the center of the frame.
        </Text>
        <Text style={styles.contentText}>
        4. Wait for the analysis results to appear.
        </Text>
        <TouchableOpacity
          style={styles.scanbtn}
          onPress={() => navigation.navigate('ScanScreen')}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/scan.png")}
          />
        
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
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  box: {
    width: '80%',
    height: windowHeight * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.03,
    marginBottom: windowHeight * 0.02,
  },
  boxText: {
    fontSize: windowWidth * 0.05,
  },
  boxTitle: {
    paddingLeft: windowWidth * 0.046,
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
  },
  topicContainer: {
    marginBottom: windowHeight * 0.02,
    alignSelf: 'flex-start',
  },
  contentContainer: {
    paddingLeft: windowWidth * 0.046,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: windowHeight * 0.02,
  },
  boxDescription: {
    fontSize: windowWidth * 0.036,
    flex: 1,
    marginRight: windowWidth * 0.02,
  },
  imageContainer: {
    marginRight: windowWidth * 0.05,
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
  },
  teaPlantImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  scanbtn: {
    width: windowWidth * 0.14,
    height: windowWidth * 0.14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.07,
    backgroundColor: '#0bce83',
    position: 'absolute',
    bottom: windowHeight * 0.14,
    right: windowWidth * 0.05,
    zIndex: 1,
    elevation: 2,
  },
  contentTitle: {
    paddingLeft: windowWidth * 0.08,
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.02,
    marginTop: windowHeight * 0.02,
  },
  contentText: {
    alignItems: 'center',
    paddingLeft: windowWidth * 0.08,
    paddingRight: windowWidth * 0.08,
    marginBottom: windowHeight * 0.02,
  },
});

export default HomeScreen;

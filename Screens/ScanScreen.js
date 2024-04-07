import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

const ScanScreen = ({ navigation }) => {
  const [photoUri, setPhotoUri] = useState(null);

  const handleUploadPhoto = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to upload photos.');
        return;
      }
      
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setPhotoUri(result.uri);
      }
    } catch (error) {
      console.error('Error uploading photo:', error);
      Alert.alert('Error', 'Failed to upload photo. Please try again.');
    }
  };

  const handleTakePhoto = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Sorry, we need camera permissions to take photos.');
        return;
      }

      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setPhotoUri(result.uri);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      Alert.alert('Error', 'Failed to take photo. Please try again.');
    }
  };

  const handleDiagnose = () => {
    if (photoUri) {
      navigation.navigate('ResultsScreen', { photoUri });
    } else {
      Alert.alert('No Photo', 'Please upload or take a photo first.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/previous.png')} style={styles.backButtonImage} />
      </TouchableOpacity>
      <View style={[styles.header, { backgroundColor: '#0bce83' }, { height: windowHeight * 0.25, paddingTop: 0 }]}>
        <Image source={require('../assets/background.png')} style={styles.backgroundImage} />
        <Text style={styles.headerText}>Diagnose</Text>
      </View>
        
      <LinearGradient
        colors={["#b0ffcb", "#eae7e7"]}
        style={[styles.box, { marginTop: -(windowHeight * 0.1) }]}>
          
        <View style={[styles.topicContainer, { alignItems: 'center' }]}>
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
      </LinearGradient>
      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleUploadPhoto}>
            <Text style={styles.buttonText}>Upload Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleTakePhoto}>
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer2}>
            {photoUri && <Image source={{ uri: photoUri }} style={styles.uploadedImage} />}
            {!photoUri && <Text style={styles.uploadText}>Upload a picture</Text>}
          </View>
        <TouchableOpacity
          style={styles.diagnoseButton}
          onPress={handleDiagnose}>
          <Text style={styles.buttonText}>Diagnose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7FCF7',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
    marginBottom: windowHeight * 0.05,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  box: {
    width: '80%',
    height: windowHeight * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.03,
    marginBottom: windowHeight * 0.02,
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
  imageContainer2: {
    marginTop: windowHeight * 0.05,
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  uploadText: {
    fontSize: windowWidth * 0.04,
    color: '#888',
  },
  backButton: {
    position: 'absolute',
    top: windowWidth * 0.1, // Adjust according to the notch height
    left: windowWidth * 0.05,
    zIndex: 1,
  },
  backButtonImage: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    marginTop: windowHeight * 0.02,
    backgroundColor: '#0bce83',
    paddingVertical: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.05,
    borderRadius: windowWidth * 0.02,
  },
  diagnoseButton: {
    marginTop: windowHeight * 0.05,
    backgroundColor: '#0bce83',
    paddingVertical: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.05,
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
  },
});

export default ScanScreen;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image, Dimensions, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ScanScreen = ({ navigation }) => {
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
        // Navigate to ResultsScreen and pass the photo URI as a parameter
        navigation.navigate('ResultsScreen', { photoUri: result.uri });
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
        // Navigate to ResultsScreen and pass the photo URI as a parameter
        navigation.navigate('ResultsScreen', { photoUri: result.uri });
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      Alert.alert('Error', 'Failed to take photo. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/previous.png')} style={styles.backButtonImage} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.instructionText}>
          Please upload a photo or take a photo of a tea plant leaf to scan.
        </Text>
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
      </View>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7FCF7',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: windowWidth * 0.1, // Adjust according to the notch height
  },
  backButton: {
    position: 'absolute',
    top: windowWidth * 0.1, // Adjust according to the notch height
    left: 20,
    zIndex: 1,
  },
  backButtonImage: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
  },
  content: {
    marginTop: windowWidth * 0.2, // Adjust according to the notch height and button size
  },
  instructionText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#0bce83',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScanScreen;

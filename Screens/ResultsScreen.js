
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ResultsScreen = ({ route, navigation }) => {
  const { photoUri } = route.params;

  const diseaseName = "Tea Rust";
  const diseaseDescription = "Tea Rust is a common fungal disease affecting tea plants, caused by the fungus Hemileia vastatrix. It appears as orange-brown rust-like spots on the leaves, leading to reduced yield and quality.";
  const solutions = [
    "Prune affected leaves and branches",
    "Apply fungicides recommended for tea rust control",
    "Ensure proper drainage to prevent waterlogging",
    "Maintain good air circulation around plants",
    "Practice crop rotation to reduce disease pressure"
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/previous.png')} style={styles.backButtonImage} />
      </TouchableOpacity>
      <View style={[styles.header, { backgroundColor: '#0bce83' }, { height: windowHeight * 0.25, paddingTop: 0 }]}>
        <Image source={require('../assets/background.png')} style={styles.backgroundImage} />
        <Text style={styles.headerText}>Results</Text>
      </View>
        
      <LinearGradient
        colors={["#b0ffcb", "#eae7e7"]}
        style={[styles.box, { marginTop: -(windowHeight * 0.1) }]}>
                    <View style={styles.imageContainer}>
      <Image source={{ uri: photoUri }} style={styles.image} />
    </View>
        
      </LinearGradient>
      <ScrollView>
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Disease Name:</Text>
      <Text style={styles.sectionContent}>{diseaseName}</Text>
    </View>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Description:</Text>
      <Text style={styles.sectionContent}>{diseaseDescription}</Text>
    </View>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Solutions:</Text>
      {solutions.map((solution, index) => (
        <Text key={index} style={styles.sectionContent}>{`${index + 1}. ${solution}`}</Text>
      ))}
    </View>
      </ScrollView>
      
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7FCF7',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  section: {
    marginBottom: windowWidth * 0.06,
    paddingHorizontal: windowWidth * 0.06,
    width: windowWidth * 0.9,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    marginBottom: windowWidth * 0.06,
  },
  sectionContent: {
    fontSize: windowWidth * 0.04,
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
    top: windowWidth * 0.1,
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

export default ResultsScreen;

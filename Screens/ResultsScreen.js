import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ResultsScreen = ({ route }) => {
  const { photoUri } = route.params;

  // Mock data for disease name, description, and solutions
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: photoUri }} style={styles.image} />
      </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
  },
});

export default ResultsScreen;

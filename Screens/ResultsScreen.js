import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import useFetchData from "../services/apiService";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

const ResultsScreen = ({ route, navigation }) => {
  const { photoUri } = route.params;
  const [fetchData, setFetchData] = useState();
  const [loading, setLoading] = useState(false);
  const leafData = useFetchData(fetchData, photoUri);

  useEffect(() => {
    async function getLeafData() {
      if (!photoUri) {
        // If there's no photoUri, we can't fetch data, so return early.
        setLoading(false);
        return;
      } else {
        setFetchData(true);
      }
    }

    // Call the async function
    getLeafData();
  }, [photoUri]);

  useEffect(() => {
    setFetchData(true);
  }, []);

  const diseaseName = "Tea Rust";
  const diseaseDescription =
    "Tea Rust is a common fungal disease affecting tea plants, caused by the fungus Hemileia vastatrix. It appears as orange-brown rust-like spots on the leaves, leading to reduced yield and quality.";
  const solutions = [
    "Prune affected leaves and branches",
    "Apply fungicides recommended for tea rust control",
    "Ensure proper drainage to prevent waterlogging",
    "Maintain good air circulation around plants",
    "Practice crop rotation to reduce disease pressure",
  ];

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  if (loading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#008000" />
      </View>
    );
  } else {
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
            <Text key={index} style={styles.sectionContent}>{`${
              index + 1
            }. ${solution}`}</Text>
          ))}
        </View>
      </ScrollView>
    );
  }
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7FCF7",
    alignItems: "center",
    paddingTop: windowWidth * 0.06,
    paddingBottom: windowWidth * 0.12,
  },
  imageContainer: {
    marginBottom: windowWidth * 0.06,
    width: windowWidth * 0.9,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: windowWidth * 0.4,
    resizeMode: "cover",
    borderRadius: windowWidth * 0.06,
  },
  section: {
    marginBottom: windowWidth * 0.06,
    paddingHorizontal: windowWidth * 0.06,
    width: windowWidth * 0.9,
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: windowWidth * 0.06,
    fontWeight: "bold",
    marginBottom: windowWidth * 0.06,
  },
  sectionContent: {
    fontSize: windowWidth * 0.04,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ResultsScreen;

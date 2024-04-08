// Import Axios library
import axios from "axios";
import { useState, useEffect } from "react";

// Function to fetch data from backend
function useFetchData(fetchData, photoUri) {
  const [leafResponse, setLeafResponse] = useState();
  async function fetchLeafData() {
    try {
      //IMPORTANT: Replace below with your own IP addresss
      const response = await axios.post("http://192.168.1.4:3000/upload", {
        photoUri,
      }); // Replace the URL with your backend endpoint
      setLeafResponse(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Throw error for handling
    }
  }

  useEffect(() => {
    if (fetchLeafData) {
      fetchLeafData();
    }
  }, [fetchData]);

  return leafResponse; // Return the data received from backend
}

module.exports = useFetchData; // Export the function to be used elsewhere

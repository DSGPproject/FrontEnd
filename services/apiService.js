// Import Axios library
const axios = require('axios');

// Function to fetch data from backend
async function fetchData() {
    try {
        const response = await axios.get('http://localhost:3000/api/data'); // Replace the URL with your backend endpoint
        return response.data; // Return the data received from backend
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Throw error for handling
    }
}

module.exports = fetchData; // Export the function to be used elsewhere

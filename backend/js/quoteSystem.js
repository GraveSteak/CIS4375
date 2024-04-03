const axios = require('axios');

// Function that defines routes
module.exports = (app) => {
  app.post('/api/quote', async (req, res) => {
    // Your route implementation
    const { startZip, endZip, vehicleType } = req.body;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Ensure this is set in your .env file
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${startZip}&destinations=${endZip}&key=${apiKey}`;
        
    try {
        const distanceResponse = await axios.get(url);
        console.log(distanceResponse.data); // Log the entire API response for debugging

        // Check if the API returned a valid response for distance
        if (distanceResponse.data.rows &&
            distanceResponse.data.rows.length > 0 &&
            distanceResponse.data.rows[0].elements &&
            distanceResponse.data.rows[0].elements.length > 0 &&
            distanceResponse.data.rows[0].elements[0].status === "OK") {
            
            const distanceInMiles = distanceResponse.data.rows[0].elements[0].distance.value / 1609.34; // Convert meters to miles
            const quote = calculateQuote(vehicleType, distanceInMiles);
            res.json({ quote });
        } else {
            // Handle cases where no valid distance was found
            res.status(400).json({ error: "Invalid request or unable to calculate distance. Please check the provided zip codes." });
        }
    } catch (error) {
        console.error("Error fetching distance from Google Maps:", error);
        res.status(500).json({ error: "Internal server error while accessing Google Maps API" });
    }
});



// Additional endpoints for CRUD operations on the database can be added here



    function calculateQuote(vehicleType, miles) {
        let basePrice = 0;
        if (miles < 150) {
        basePrice = vehicleType === 'Sedan' ? 350 : vehicleType === 'SUV' ? 400 : vehicleType === 'Truck' ? 425 : 400; // Default for 'Other'
        } else if (miles >= 150 && miles < 1000) {
        basePrice = vehicleType === 'Sedan' ? (miles * 0.55) + 200 : vehicleType === 'SUV' ? (miles * 0.65) + 200 : vehicleType === 'Truck' ? (miles * 0.7) + 200 : (miles * 0.55) + 200;
        } else {
        basePrice = vehicleType === 'Sedan' ? (miles * 0.5) + 200 : vehicleType === 'SUV' ? (miles * 0.6) + 200 : vehicleType === 'Truck' ? (miles * 0.6) + 200 : (miles * 0.5) + 200;
        }
        return basePrice;
    }
    module.exports = { calculateQuote }
};

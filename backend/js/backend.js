const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors'); // Import CORS middleware

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'itcycledb.c5ms0yw8u4s3.us-east-1.rds.amazonaws.com',
  user: 'ITcycleadmin',
  password: 'ITcyclepassword',
  database: 'AMG_Endeavors'
});

// Function to execute SQL queries
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

// Create a new client
const axios = require('axios');

app.post('/form', async (req, res) => {
  try {
    const { Start_Zip, End_Zip, C_F_Name, C_L_Name, C_email, C_Company, phone_numb, VehicleMake, VehicleType, year, VehicleModel, VehicleOperable} = req.body;

    // Use Google Maps Distance Matrix API to calculate distance
    const distanceResponse = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${Start_Zip}&destinations=${End_Zip}&key=AIzaSyAwpLIn5Xx6Ojz2UKV8kqAaRUmYbgD1Zgc`);
    const distanceData = distanceResponse.data;
    const generalDistance = distanceData.rows[0].elements[0].distance.value; // This value will be in meters
    const distanceInMiles = generalDistance / 1609.34

    // Insert client data
    const insertClientSql = 'INSERT INTO Client (C_F_Name, C_L_Name, C_email, C_Company, phone_numb) VALUES (?, ?, ?, ?, ?)';
    const clientValues = [C_F_Name, C_L_Name, C_email, C_Company, phone_numb];
    const clientResult = await query(insertClientSql, clientValues);
    const clientId = clientResult.insertId;

    // Insert vehicle data with foreign key reference to the client
    const insertVehicleSql = 'INSERT INTO Vehicles (VehicleMake, VehicleType, year, VehicleModel, ClientID) VALUES (?, ?, ?, ?, ?)';
    const vehicleValues = [VehicleMake, VehicleType, year, VehicleModel, clientId];
    const vehicleResult = await query(insertVehicleSql, vehicleValues);
    const vehicleIDFK = vehicleResult.insertId

    // Insert distance data into the Distance table
    const insertDistanceSql = 'INSERT INTO Distance (Start_Zip, End_Zip, General_Distance) VALUES (?, ?, ?)';
    const distanceValues = [Start_Zip, End_Zip, distanceInMiles];
    const distanceResult = await query(insertDistanceSql, distanceValues);
    const distanceIDFK = distanceResult.insertId;

    // Assuming you have already retrieved the distance in miles and identified the VehicleType
    let genPrice = 0;
    if (VehicleOperable === "Yes"){
        genPrice = 150;
    };

    switch (VehicleType) {
      case 'Sedan':
        if (distanceInMiles < 150) {
          genPrice += 350;
        } else if (distanceInMiles < 1000) {
          genPrice += (distanceInMiles * 0.55 + 200);
        } else {
          genPrice += (distanceInMiles * 0.5 + 200);
        }
        break;

      case 'SUV':
        if (distanceInMiles < 150) {
          genPrice += 400;
        } else if (distanceInMiles < 1000) {
          genPrice += (distanceInMiles * 0.65 + 200);
        } else {
          genPrice += (distanceInMiles * 0.6 + 200);
        }
        break;

      case 'Truck':
        if (distanceInMiles < 150) {
          genPrice += 425;
        } else if (distanceInMiles < 1000) {
          genPrice += (distanceInMiles * 0.7 + 200);
        } else {
          genPrice += (distanceInMiles * 0.6 + 200);
        }
        break;

      default: // Other (coupe)
        if (distanceInMiles < 150) {
          genPrice += 400;
        } else if (distanceInMiles < 1000) {
          genPrice += (distanceInMiles * 0.55 + 200);
        } else {
          genPrice += (distanceInMiles * 0.5 + 200);
        }
    }

// Now you can insert this genPrice into the Price table along with other details
    const insertPriceSql = 'INSERT INTO Price (Gen_Price, Description, DistanceID) VALUES (?, ?, ?)';
    const priceValues = [genPrice,'Description here', distanceIDFK]; // Replace with appropriate values
    const priceResult = await query(insertPriceSql, priceValues);
    const priceIDFK = priceResult.insertId

    const insertRequestSql = 'INSERT INTO Request_Information (Vehicle_Request_ID, PriceID, Client_Name_Comb, Price) VALUES (?, ?, ?, ?)';
    const RequestValues = [vehicleIDFK, priceIDFK, C_F_Name + " " + C_L_Name, genPrice]; // Replace with appropriate values
    await query(insertRequestSql, RequestValues);
    
    res.json({ success: true, message: 'Client, Vehicle, and Distance data saved successfully', genPrice: genPrice });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
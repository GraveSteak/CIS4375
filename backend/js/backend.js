const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Database connection
const connection = mysql.createConnection({
  host: 'itcycledb.c5ms0yw8u4s3.us-east-1.rds.amazonaws.com',
  user: 'ITcycleadmin',
  password: 'ITcyclepassword',
  database: 'AMG_Endeavors'
});

// Utility function to execute SQL queries
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
};


app.post('/form', async (req, res) => {
  try {
    // Extract client and vehicle information from request body
    const { Start_Zip, End_Zip, C_F_Name, C_L_Name, C_email, C_Company, phone_numb, VehicleMake, VehicleModel, VehicleType, year, VehicleOperable } = req.body;

    // Use Google Maps Distance Matrix API to calculate distance
    const distanceResponse = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${Start_Zip}&destinations=${End_Zip}&key=AIzaSyAwpLIn5Xx6Ojz2UKV8kqAaRUmYbgD1Zgc`);
    const distanceData = distanceResponse.data;
    const generalDistance = distanceData.rows[0].elements[0].distance.value; // This value will be in meters
    const distanceInMiles = generalDistance / 1609.34

    // Insert client data
    const insertClientSql = 'INSERT INTO Client (C_F_Name, C_L_Name, C_email, C_Company, phone_numb, Num_Requests) VALUES (?, ?, ?, ?, ?, ?)';
    const clientValues = [C_F_Name, C_L_Name, C_email, C_Company, phone_numb, VehicleMake.length];
    const clientResult = await query(insertClientSql, clientValues);
    const clientId = clientResult.insertId;
  
    // Insert distance data
    const insertDistanceSql = 'INSERT INTO Distance (Start_Zip, End_Zip, General_Distance) VALUES (?, ?, ?)';
    const distanceResult = await query(insertDistanceSql, [Start_Zip, End_Zip, distanceInMiles]);
    const distanceIDFK = distanceResult.insertId;

    let totalGenPrice = 0;

    // Process each vehicle
    for (let i = 0; i < VehicleMake.length; i++) {
      // Insert vehicle data
      const insertVehicleSql = 'INSERT INTO Vehicles (VehicleMake, VehicleModel, VehicleType, year, Operable, ClientID) VALUES (?, ?, ?, ?, ?, ?)';
      await query(insertVehicleSql, [VehicleMake[i], VehicleModel[i], VehicleType[i], year[i], VehicleOperable[i], clientId]);

      // Calculate price for each vehicle
      let genPrice = VehicleOperable[i] === 'No' ? 150 : 0;

      switch (VehicleType[i]) {
          case 'Sedan':
              if (distanceInMiles < 150) {
                  genPrice += 350;
              } else if (distanceInMiles < 1000) {
                  genPrice += (distanceInMiles * 0.55 + 200);
              } else { // for distances greater than 1000 miles
                  genPrice += (distanceInMiles * 0.5 + 200);
              }
              break;
          case 'SUV':
              if (distanceInMiles < 150) {
                  genPrice += 400;
              } else if (distanceInMiles < 1000) {
                  genPrice += (distanceInMiles * 0.65 + 200);
              } else { // for distances greater than 1000 miles
                  genPrice += (distanceInMiles * 0.6 + 200);
              }
              break;
          case 'Truck':
              if (distanceInMiles < 150) {
                  genPrice += 425;
              } else if (distanceInMiles < 1000) {
                  genPrice += (distanceInMiles * 0.7 + 200);
              } else { // for distances greater than 1000 miles
                  genPrice += (distanceInMiles * 0.6 + 200);
              }
              break;
          default:
              // Assuming the default case applies the same logic as Sedan
              if (distanceInMiles < 150) {
                  genPrice += 400;
              } else if (distanceInMiles < 1000) {
                  genPrice += (distanceInMiles * 0.55 + 200);
              } else { // for distances greater than 1000 miles
                  genPrice += (distanceInMiles * 0.5 + 200);
              }
      }
      totalGenPrice += genPrice;
    }

    const insertPriceSql = 'INSERT INTO Price (Gen_Price, Description, DistanceID) VALUES (?, ?, ?)';
    const priceValues = [totalGenPrice,'Description here', distanceIDFK]; 
    const priceResult = await query(insertPriceSql, priceValues);
    const priceIDFK = priceResult.insertId

    const insertRequestSql = 'INSERT INTO Request_Information (PriceID, Client_Name_Comb, Price) VALUES (?, ?, ?)';
    const RequestValues = [priceIDFK, C_F_Name + " " + C_L_Name, totalGenPrice]; 
    await query(insertRequestSql, RequestValues);

    // Respond with the total price for all vehicles
    res.json({ success: true, message: 'Client and vehicles data saved successfully', totalGenPrice: totalGenPrice });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
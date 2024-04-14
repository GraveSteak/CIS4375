const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


const { fetchSpecial, fetchProgress, fetchClients, fetchClientById, deleteSpecial, fetchCar, fetchPriceById } = require('./clientCrudOperations');

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

// Database connection
async function connectToDatabase() {
  return mysql.createConnection({
    host: 'itcycledb.c5ms0yw8u4s3.us-east-1.rds.amazonaws.com',
    user: 'ITcycleadmin',
    password: 'ITcyclepassword',
    database: 'AMG_Endeavors',
    port: 3306
  });
}

// Utility function to execute SQL queries
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
};

// Mock user for demonstration purposes
const users = [
  {
    id: 1,
    username: 'ITcycleadmin',
    password: 'ITcyclepassword' // In a real app, passwords should be hashed
  }
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.get('/api/client-type-counts', async (req, res) => {
  try {
  const db = await connectToDatabase();
  const [data] = await db.query(`
      SELECT
          COUNT(*) AS TotalClients,
          SUM(CASE WHEN C_Company = 'Self' THEN 1 ELSE 0 END) AS SelfClients
      FROM Client;
  `);
  return res.json(data);
} catch (error) {
  console.error('Failed to fetch request data:', error);
  res.status(500).json({ success: false, message: 'Failed to fetch request data', error: error.message });
}
});

app.get('/api/num_requests_chart', async (req, res) => {
  try {
      const db = await connectToDatabase();
      const query = `
          SELECT DATE(Date_Created) as RequestDate, COUNT(*) as NumRequests
          FROM Request_Information
          GROUP BY DATE(Date_Created)
          ORDER BY DATE(Date_Created);
      `;
      const [results] = await db.query(query);
      return res.json(results);
  } catch (error) {
      console.error('Failed to fetch request data:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch request data', error: error.message });
  }
});

app.get('/api/average-price-data', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [data] = await db.query(`
        SELECT DATE(Date_Created) AS RequestDate, AVG(Price) AS AveragePrice
        FROM Request_Information
        GROUP BY DATE(Date_Created)
        ORDER BY DATE(Date_Created);
    `);
    return res.json(data);
  } catch (error) {
    console.error('Failed to fetch request data:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch request data', error: error.message });
}
});

app.get('/api/top-zip-codes', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [data] = await db.query(`
        SELECT Start_Zip, SUM(Price) AS TotalRevenue
        FROM Distance
        JOIN Request_Information ON Distance.DistanceID = Request_Information.PriceID
        GROUP BY Start_Zip
        ORDER BY SUM(Price) DESC
        LIMIT 10;
    `);
    return res.json(data);
  } catch (error) {
    console.error('Failed to fetch request data:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch request data', error: error.message });
}
});

app.get('/api/distance-distribution', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [data] = await db.query(`
        SELECT General_Distance
        FROM Distance;
    `);
    return res.json(data);
  } catch (error) {
    console.error('Failed to fetch request data:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch request data', error: error.message });
}
});

// Define a route to fetch car types and their counts  
app.get('/api/car-types', async (req, res) => {
  try {
    const db = await connectToDatabase(); // Connect to the database
    // Perform the SQL query to get vehicle types and their counts
    const [results] = await db.query('SELECT VehicleType, COUNT(*) AS count FROM Vehicles GROUP BY VehicleType');
    // Close the database connection gracefully
    await db.end();

    // Return the results as JSON
    return res.json(results);
  } catch (error) {
    console.error('Database query failed:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});


app.get('/api/data', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [results] = await db.query('SELECT * FROM Client');
    console.log(results);// Check the structure of results
    res.json(results);
  } catch (error) {
    console.error('Database query failed:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/api/special', async (req, res) => {
  const { date, description, additional_cost } = req.body;
  
  // Validate that all required parameters are provided and not undefined
  if (date === undefined || description === undefined || additional_cost === undefined) {
      return res.status(400).json({
          success: false,
          message: 'Missing required parameters or parameters are undefined'
      });
  }

  try {
      const db = await connectToDatabase();
      const query = 'INSERT INTO Special_Circumstance (SpecialDate, SpecialDate_Description, Additional_Cost) VALUES (?, ?, ?)';
      const values = [date, description, additional_cost]; // Ensure this line is correct
      console.log(values);

      // Execute the query without capturing the result
    await db.query(query, values);
      res.json({
          success: true,
          message: 'Holiday created successfully'
      });
  } catch (error) {
      console.error('Failed to insert holiday:', error);
      res.status(500).json({
          success: false,
          message: 'Failed to insert holiday data',
          error: error.message
      });
  }
});

// Endpoint to get all clients
app.get('/api/clients', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const clients = await fetchClients(db);
    db.end();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to get a single client by ID
app.get('/api/clients/:id', async (req, res) => {
  const clientId = req.params.id;
  try {
    const db = await connectToDatabase();
    const client = await fetchClientById(clientId, db);
    db.end();

    if (!client || client.length === 0) {
      res.status(404).json({ message: 'Client not found' });
    } else {
      res.json(client[0]);
    }
  } catch (error) {
    console.error('Error fetching client:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Get generated prices
app.get('/api/price/:id', async (req, res) => {
  const clientId = req.params.id;
  try {
      const db = await connectToDatabase();  // Get connection from the pool
      const [prices] = await db.query('SELECT * FROM Price WHERE ClientID = ?', [clientId]);
      if (prices.length === 0) {
          res.status(404).json({ message: 'Price information not found for the client' });
      } else {
          res.json(prices[0]); // Send the first record if found
      }
  } catch (error) {
      console.error("Failed to fetch price:", error);
      res.status(500).json({ error: 'Internal server error while fetching price' });
  }
});


// Endpoint for retrieving client information based on phone number
app.get('/api/clientID', async (req, res) => {
  const clientId = req.query.ClientID;
  try {
    const db = await connectToDatabase();
    const client = await fetchClientById(clientId, db);
    db.end();

    if (client.length > 0) {
      res.json(client[0]);  // Send the first (and only) client in the array
    } else if (response.status === 404) {
      throw new Error('Client not found'); 
    }
    
  } catch (error) {
    console.error('Error fetching client:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint for retrieving car information based on client ID
app.get('/api/car', async (req, res) => {
  const ClientID = req.query.ClientID;
  try {
    const db = await connectToDatabase();
    const car = await fetchCar(ClientID, db);
    console.log("Fetched car data:", car);
    db.end();
    console.log("Car fetched:", car);

    if (car.length > 0) {
      res.json(car);  // Send all cars found
    } else {
      res.status(404).json({ message: 'No cars found' });
    }
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//GET client progress
app.get('/api/progress/:ClientID', async (req, res) => {
  const ClientID = req.params.ClientID;
  try {
    const db = await connectToDatabase(); // Get connection from the pool
    const progress = await fetchProgress(ClientID, db);

    if (progress.length === 0) {
      res.status(404).json({ message: 'No progress found for this client.' });
    } else {
      res.json(progress[0]); // Send back the first (and should be only) record
    }
  } catch (error) {
    console.error('Error fetching client progress:', error);
    res.status(500).json({ error: 'Internal server error while fetching client progress' });
  }
  // No need to call db.end() or db.release() if you're using mysql2/promise properly
});

//GET special dates
app.get('/api/special/:date', async (req, res) => {
  const date = req.params.date;

  // Validate the date format to avoid SQL injection and ensure it's the correct format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res.status(400).json({ message: 'Invalid date format. Please use YYYY-MM-DD format.' });
  }

  try {
    const db = await connectToDatabase(); // Get connection from the pool
    const special = await fetchSpecial(date, db);

    if (special.length === 0) {
      res.status(404).json({ message: 'No holiday found for this date.' });
    } else {
      res.json(special[0]); // Send back the first (and should be only) record
    }
  } catch (error) {
    console.error(`Error fetching holiday for date ${date}:`, error);
    res.status(500).json({ error: 'Internal server error while fetching holiday' });
  }
});

// PUT endpoint to update a holiday
app.put('/api/special/:date', async (req, res) => {
  const { date } = req.params; // Get the date from the URL parameter
  const { description, additional_cost } = req.body; // Get the updated values from the request body
  
  // Validate that all required parameters are provided and not undefined
  if (description === undefined && additional_cost === undefined) {
    return res.status(400).json({
      success: false,
      message: 'At least one parameter (description or additional_cost) must be provided for update'
    });
  }

  try {
    const db = await connectToDatabase();
    console.log('Database connected');

    // Prepare the SQL query based on the provided parameters
    let query = 'UPDATE Special_Circumstance SET ';
    const values = [];
    if (description !== undefined) {
      query += 'SpecialDate_Description = ?';
      values.push(description);
    }
    if (additional_cost !== undefined) {
      if (values.length > 0) {
        query += ', ';
      }
      query += 'Additional_Cost = ?';
      values.push(additional_cost);
    }
    query += ' WHERE SpecialDate = ?';
    values.push(date);

    // Execute the query
    const [result] = await db.query(query, values);

    if (result.affectedRows === 0) {
      // If no rows were affected, the holiday with the provided date does not exist
      return res.status(404).json({
        success: false,
        message: 'Holiday not found'
      });
    }

    // If the query was successful, return a success response
    res.json({
      success: true,
      message: 'Holiday updated successfully'
    });
  } catch (error) {
    // If an error occurs, return a 500 error response
    console.error('Failed to update holiday:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update holiday data',
      error: error.message
    });
  }
});


//Update Progress table
app.put('/api/progress/:ClientID', async (req, res) => {
  const ClientID = req.params.ClientID;
  const { fullName, quote, allVehicles } = req.body;

  // Validate that at least one of the fields is provided
  if (!fullName && !quote && !allVehicles) {
      return res.status(400).json({
          success: false,
          message: 'At least one field (full_name, quote, or allVehicles) must be provided for updating progress.'
      });
  }

  try {
      // Assuming you have a database connection
      const db = await connectToDatabase();
      
      // Build the SQL query based on the provided fields
      let query = 'UPDATE Request_Information SET ';
      let values = [];
      let setCount = 0;

      if (fullName) {
          query += 'Client_Name_Comb = ?, ';
          values.push(fullName);
          setCount++;
      }

      if (quote) {
          query += 'Price = ?, ';
          values.push(quote);
          setCount++;
      }

      if (allVehicles) {
          query += 'List_Of_Vehicles = ?, ';
          values.push(allVehicles);
          setCount++;
      }

      // Remove the trailing comma and space from the query
      query = query.slice(0, -2);

      // Add the ClientID to the WHERE clause
      query += ' WHERE ClientID = ?';
      values.push(ClientID);

      // Execute the update query
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
          // No client found with the provided ID
          return res.status(404).json({
              success: false,
              message: 'Client not found or could not be updated.'
          });
      }

      // Progress updated successfully
      res.json({
          success: true,
          message: 'Progress updated successfully.'
      });
  } catch (error) {
      console.error('Failed to update progress:', error);
      res.status(500).json({
          success: false,
          message: 'Failed to update progress.',
          error: error.message
      });
  }
});


// Endpoint to delete a holiday
app.delete('/api/special/:id', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const result = await deleteSpecial(req.params.id, db);
    db.end();
    if (result > 0) res.json({ success: true });
    else res.status(404).json({ message: 'Holiday not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Get a price by ID
app.get('/api/prices/:id', async (req, res) => {
  try {
      const db = await connectToDatabase();
      const prices = await fetchPriceById(req.params.id, db);
      db.end();
      if (prices.length > 0) {
          res.json(prices[0]);
      } else {
          res.status(404).json({ message: 'Price not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Create a new price
app.post('/api/prices', async (req, res) => {
  try {
      const db = await connectToDatabase();
      const PriceID = await insertPrice(req.body, db);
      db.end();
      res.status(201).json({ message: 'Price created', id: PriceID });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Update a price
app.put('/api/prices/:id', async (req, res) => {
  try {
      const db = await connectToDatabase();
      const result = await updatePrice(req.body, req.params.id, db);
      db.end();
      if (result > 0) {
          res.json({ message: 'Price updated' });
      } else {
          res.status(404).json({ message: 'Price not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Delete a price
app.delete('/api/prices/:id', async (req, res) => {
  try {
      const db = await connectToDatabase();
      const result = await deletePrice(req.params.id, db);
      db.end();
      if (result > 0) {
          res.json({ message: 'Quote deleted' });
      } else {
          res.status(404).json({ message: 'Quote not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Get a vehicle by ID
app.get('/api/vehicles/:id', async (req, res) => {
  try {
      const db = await connectToDatabase();
      const vehicles = await fetchVehicleById(req.params.id, db);
      db.end();

      if (vehicles.length > 0) {
          res.json(vehicles[0]);
      } else {
          res.status(404).json({ message: 'Vehicle not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Create a new vehicle
app.post('/api/vehicles', async (req, res) => {
  try {
      const db = await connectToDatabase();
      const Vehicle_Request_ID = await insertVehicle(req.body, db);
      db.end();
      res.status(201).json({ message: 'Vehicle created', id: Vehicle_Request_ID });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Update a vehicle
app.put('/api/vehicles/:id', async (req, res) => {
  try {
      const db = await connectToDatabase();
      const result = await updateVehicle(req.body, req.params.id, db);
      db.end();
      if (result > 0) {
          res.json({ message: 'Vehicle updated' });
      } else {
          res.status(404).json({ message: 'Vehicle not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Delete a vehicle
app.delete('/api/vehicles/:id', async (req, res) => {
  try {
      const db = await connectToDatabase();
      const result = await deleteVehicle(req.params.id, db);
      db.end();
      if (result > 0) {
          res.json({ message: 'Vehicle deleted' });
      } else {
          res.status(404).json({ message: 'Vehicle not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.post('/form', async (req, res) => {
  try {
    const db = await connectToDatabase();
    // Extract client and vehicle information from request body
    const { Start_Zip, End_Zip, C_F_Name, C_L_Name, C_email, C_Company, phone_numb, VehicleMake, VehicleModel, VehicleType, year, VehicleOperable, affiliation, company_name, chosen_date } = req.body;
    console.log(req.body);
    // Use Google Maps Distance Matrix API to calculate distance
    const distanceResponse = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${Start_Zip}&destinations=${End_Zip}&key=AIzaSyAwpLIn5Xx6Ojz2UKV8kqAaRUmYbgD1Zgc`);
    const distanceData = distanceResponse.data;
    const generalDistance = distanceData.rows[0].elements[0].distance.value; // This value will be in meters
    const distanceInMiles = generalDistance / 1609.34

    // Insert client data
    let Reptype;
    
    if (affiliation === 'Self'){
        Reptype = affiliation;
    }else{
        Reptype = company_name;
    };

    // Check for special circumstances
    const specialDateCheckSql = 'SELECT SpecialID, Additional_Cost, SpecialDate_Description FROM Special_Circumstance WHERE SpecialDate = ?';
    const [specialDates] = await db.query(specialDateCheckSql, [chosen_date]);
    let additionalCost = 0;
    let s_Description = 'Standard';
    let s_ID = null;

    if (specialDates.length > 0) {
        additionalCost = specialDates[0].Additional_Cost;
        s_Description = specialDates[0].SpecialDate_Description;
        s_ID = specialDates[0].SpecialID;
    }

    const insertClientSql = 'INSERT INTO Client (C_F_Name, C_L_Name, C_email, C_Company, phone_numb, Num_Requests) VALUES (?, ?, ?, ?, ?, ?)';
    const clientValues = [C_F_Name, C_L_Name, C_email, Reptype, phone_numb, VehicleMake.length];
    const clientResult = await db.query(insertClientSql, clientValues);
    const clientId = clientResult[0].insertId;
    console.log("Inserted Client ID:", clientId);
  
    // Insert distance data
    const insertDistanceSql = 'INSERT INTO Distance (Start_Zip, End_Zip, General_Distance, Date_Rec) VALUES (?, ?, ?, ?)';
    const distanceResult = await db.query(insertDistanceSql, [Start_Zip, End_Zip, distanceInMiles, chosen_date]);
    const distanceIDFK = distanceResult[0].insertId;
    console.log("Inserted Distance ID:", distanceIDFK);

    let totalGenPrice = 0;

    list_of_vehicles = ['Vehicles: '];
    // Process each vehicle
    for (let i = 0; i < VehicleMake.length; i++) {
      // Insert vehicle data
      const insertVehicleSql = 'INSERT INTO Vehicles (VehicleMake, VehicleModel, VehicleType, year, Operable, ClientID) VALUES (?, ?, ?, ?, ?, ?)';
      await db.query(insertVehicleSql, [VehicleMake[i], VehicleModel[i], VehicleType[i], year[i], VehicleOperable[i], clientId]);

      // Calculate price for each vehicle
      let genPrice = VehicleOperable[i] === 'No' ? 150 : 0;

      list_of_vehicles[0] += VehicleMake[i] + " " + VehicleModel[i] + ", ";

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

    totalGenPrice += additionalCost; // Add any special circumstance costs

    const insertPriceSql = 'INSERT INTO Price (Gen_Price, Description, DistanceID, SpecialID, clientID) VALUES (?, ?, ?, ?, ?)';
    const priceValues = [totalGenPrice.toFixed(2), s_Description, distanceIDFK, s_ID, clientId]; 
    const priceResult = await db.query(insertPriceSql, priceValues);
    const priceIDFK = priceResult[0].insertId
    console.log("Inserted Price ID:", priceResult[0].insertId);

    const insertRequestSql = 'INSERT INTO Request_Information (PriceID, Client_Name_Comb, Price, List_Of_Vehicles, ClientID) VALUES (?, ?, ?, ?, ?)';
    const RequestValues = [priceIDFK, C_F_Name + " " + C_L_Name, totalGenPrice.toFixed(2), list_of_vehicles, clientId]; 
    await db.query(insertRequestSql, RequestValues);

    // Respond with the total price for all vehicles
    res.json({ success: true, message: 'Client and vehicles data saved successfully', totalGenPrice: totalGenPrice });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'itcycle0@gmail.com',
      pass: 'whyh nyqh ghuo oygv'
  }
});

// Route to handle POST request
app.post('/send-email', async (req, res) => {
  console.log('Received data:', req.body);
  const { C_F_Name, C_L_Name, C_email, phone_numb, affiliation, company_name: rawCompanyName, Start_Zip, End_Zip, VehicleMake, VehicleModel, VehicleType, VehicleOperable, year, chosen_date } = req.body;

  // Replace company_name with 'N/A' if it is null or undefined
  const company_name = rawCompanyName || 'N/A';
  
  const emailBody = `
    First Name: ${C_F_Name}
    Last Name: ${C_L_Name}
    Email: ${C_email}
    Phone Number: ${phone_numb}
    Affiliation: ${affiliation}
    Company Name: ${company_name || 'N/A'}
    Start Zip Code: ${Start_Zip}
    End Zip Code: ${End_Zip}
    Arrival Date: ${chosen_date}
    Vehicle Make: ${VehicleMake},
    Vehicle Model: ${VehicleModel},
    Vehicle Type: ${VehicleType},
    Vehicle year: ${year},
    Vehicle Operable: ${VehicleOperable}

    We'll be in touch soon! 

    Sincerely, 
    AMG Endeavors 
  `;

// Email options
  const mailOptions = {
    from: 'itcycle0@gmail.com',
    to: ['itcycle0@gmail.com', C_email], // Array of email addresses
    subject: 'Form Submission Copy',
    text: emailBody
};

  try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Import required modules
const express = require('express');
const bodyParser = require('body-parser'); // If you need to parse POST data
const jwt = require('jsonwebtoken');

// If connecting to a database, you might require a database client
// const dbClient = require('some-db-client');

// Load environment variables from a .env file for database connection, etc.
require('dotenv').config();

// Initialize express app
const app = express();
const port = process.env.PORT || 3000; // Use port from environment variables or default to 3000
const mysql = require('mysql2/promise');
const cors = require('cors');

async function connectToDatabase() {
    return mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }

// Middleware
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.use(cors()); 

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/data', async (req, res) => {
    try {
      const db = await connectToDatabase();
      const [results] = await db.query('SELECT * FROM some_table');
      res.json(results);
    } catch (error) {
      console.error('Database query failed:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.get('/api/data', (req, res) => {
    res.json({ message: 'Data fetched successfully' });
  });

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

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

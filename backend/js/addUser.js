const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

// Replace these with your actual database connection details
const dbConfig = {
  host: 'itcycledb.c5ms0yw8u4s3.us-east-1.rds.amazonaws.com',
  user: 'ITcycleadmin',
  password: 'ITcyclepassword',
  database: 'users'
};

const username = 'admin'; // Replace with the username you wish to add
const password = 'password'; // Replace with the user's password

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Database connection successful!');
    return connection;
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    process.exit(1); // Exit the script with an error status
  }
}

async function addUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
  const conn = await connectToDatabase(); // This will log the connection status

  try {
    const [result] = await conn.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );
    console.log('User added successfully:', result);
  } catch (error) {
    console.error('Error adding user:', error.message);
  } finally {
    if (conn) {
      await conn.end(); // Close the database connection
    }
  }
}

addUser(username, password);

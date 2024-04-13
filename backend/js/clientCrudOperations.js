const mysql = require('mysql2/promise');

// Insert a new client into the database
async function insertClient(data, connection) {
  const { firstName, lastName, email, phoneNumber } = data;
  const insertSql = 'INSERT INTO Client (C_F_Name, C_L_Name, C_email, phone_numb) VALUES (?, ?, ?, ?)';
  const [results] = await connection.execute(insertSql, [firstName, lastName, email, phoneNumber]);
  return results.insertId;
}


// Fetch clients from the database by id
async function fetchClientById(clientId, connection) {
  const selectSql = 'SELECT * FROM Client WHERE ClientID = ?';
  try {
    const [results] = await connection.execute(selectSql, [clientId]);
    return results;  // This will return an array of rows; should be 0 or 1 row(s)
  } catch (error) {
    console.error('Failed to fetch client:', error);
    throw error; // Rethrow or handle as needed
  }
}

// Fetch clients from the database by phone number
async function fetchClientByPhoneNumber(phone_numb, connection) {
  const selectSql = 'SELECT * FROM Client WHERE phone_numb = ?';
  try {
    const [results] = await connection.execute(selectSql, [phone_numb]);
    console.log("this is running")
    return results;  // This will return an array of rows; should be 0 or 1 row(s)
  } catch (error) {
    console.error('Failed to fetch client:', error);
    throw error; // Rethrow or handle as needed
  }
}

// Fetch car from the database by client ID
async function fetchCar(ClientID, connection) {
  const selectSql = 'SELECT * FROM Vehicles WHERE ClientID = ?';
  try {
    const [results] = await connection.execute(selectSql, [ClientID]);
    console.log("this is running")
    return results;  // This will return an array of rows; should be 0 or 1 row(s)
  } catch (error) {
    console.error('Failed to fetch car:', error);
    throw error; // Rethrow or handle as needed
  }
}

// Update a client in the database
async function updateClient(data, clientId, connection) {
  const { firstName, lastName, email, phoneNumber } = data;
  const updateSql = 'UPDATE Client SET C_F_Name = ?, C_L_Name = ?, C_email = ?, phone_numb = ? WHERE ClientID = ?';
  const [results] = await connection.execute(updateSql, [firstName, lastName, email, phoneNumber, clientId]);
  return results.affectedRows;
}

// Delete a client from the database
async function deleteClient(clientId, connection) {
  const deleteSql = 'DELETE FROM Client WHERE ClientID = ?';
  const [results] = await connection.execute(deleteSql, [clientId]);
  return results.affectedRows;
}

module.exports = { insertClient, fetchClientById, updateClient, deleteClient, fetchClientByPhoneNumber, fetchCar };

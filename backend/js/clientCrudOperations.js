const mysql = require('mysql2/promise');

// Insert a new client into the database
async function insertClient(data, connection) {
  const { firstName, lastName, email, phoneNumber } = data;
  const insertSql = 'INSERT INTO Client (C_F_Name, C_L_Name, C_email, C_Company, phone_numb) VALUES (?, ?, ?, ?, ?)';
  const [results] = await connection.execute(insertSql, [firstName, lastName, email, phoneNumber]);
  return results.insertId;
}

// Fetch all clients from the database
async function fetchClients(connection) {
  const selectSql = 'SELECT * FROM Client';
  const [clients] = await connection.execute(selectSql);
  return clients;
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

// Fetch price from the database by id
async function fetchPriceById(clientId, connection) {
  const selectSql = 'SELECT Gen_Price FROM Price WHERE ClientID = ?';
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
    return results;  // This will return an array of rows; should be 0 or 1 row(s)
  } catch (error) {
    console.error('Failed to fetch client:', error);
    throw error; // Rethrow or handle as needed
  }
}

// GET all car rows
async function fetchCar(ClientID, connection) {
  const selectSql = 'SELECT * FROM Vehicles WHERE ClientID = ?';
  try {
      // Execute the SQL query with the provided ClientID
      const [results] = await connection.execute(selectSql, [ClientID]);


      if (results.length === 0) {
          console.log("No cars found for this ClientID:", ClientID);
      } else {
          console.log(`Found ${results.length} cars for ClientID:`, ClientID);
      }

      return results;  // This returns an array of rows (each row represents a vehicle)
  } catch (error) {
      console.error('Failed to fetch cars:', error);
      throw error;  // Rethrow the error to be handled or logged by the caller
  }
}


// Fetch progress from the database by client ID
async function fetchProgress(ClientID, connection) {
  const selectSql = 'SELECT Client_Name_Comb, Price, List_Of_Vehicles FROM Request_Information WHERE ClientID = ?';
  try {
    const [results] = await connection.execute(selectSql, [ClientID]);
    console.log("this is running")
    return results;  // This will return an array of rows; should be 0 or 1 row(s)
  } catch (error) {
    console.error('Failed to fetch client:', error);
    throw error; // Rethrow or handle as needed
  }
}

// Fetch progress from the database by client ID
async function fetchSpecial(date, connection) {
  const selectSql = 'SELECT SpecialDate, SpecialDate_Description, Additional_Cost FROM Special_Circumstance WHERE SpecialDate = ?';
  try {
    const [results] = await connection.execute(selectSql, [date]);
    console.log("this is running")
    return results;  // This will return an array of rows; should be 0 or 1 row(s)
  } catch (error) {
    console.error('Failed to fetch client:', error);
    throw error; // Rethrow or handle as needed
  }
}

// Update a client in the database
async function updateClient(data, phone_numb, connection) {
  const { first_name, last_name, email, company, num_requests } = data;
  const updateSql = 'UPDATE Client SET C_F_Name = ?, C_L_Name = ?, C_email = ?, C_Company = ?, Num_Requests = ?, phone_numb = ? WHERE phone_numb = ?';
  try {
    const [results] = await connection.execute(updateSql, [first_name, last_name, email, company, num_requests, phone_numb, phone_numb]);
    console.log('SQL query executed successfully');
    return results.affectedRows;
  } catch (error) {
    console.error('Failed to update client:', error);
    throw error; // It's better to throw the error further so that it can be caught in the calling function.
  }
}

// Delete a client from the database
async function deleteSpecial(date, connection) {
  const deleteSql = 'DELETE FROM Special_Circumstance WHERE SpecialDate = ?';
  const [results] = await connection.execute(deleteSql, [date]);
  return results.affectedRows;
}

module.exports = { fetchSpecial, fetchProgress, insertClient, fetchClients, fetchClientById, updateClient, deleteSpecial, fetchClientByPhoneNumber, fetchCar, fetchPriceById };

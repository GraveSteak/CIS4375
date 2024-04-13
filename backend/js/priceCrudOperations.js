const mysql = require('mysql2/promise');

// Fetch a price by ClientID
async function fetchPriceById(clientId, connection) {
    const query = 'SELECT * FROM Price WHERE PriceID = ?';
    const [results] = await connection.execute(query, [clientId]);
    return results;  // This will return an array of rows; should be 0 or 1 row(s)
}

// Insert a new price into the database
async function insertPrice(data, connection) {
    const { Gen_Price, Description, DistanceID } = data;
    const query = 'INSERT INTO Price (Gen_Price, Description, DistanceID) VALUES (?, ?, ?)';
    const [result] = await connection.execute(query, [Gen_Price, Description, DistanceID]);
    return result.insertId;
}

// Update a price in the database
async function updatePrice(data, priceId, connection) {
    const { Gen_Price, Description, DistanceID } = data;
    const query = 'UPDATE Price SET Gen_Price = ?, Description = ?, DistanceID = ? WHERE PriceID = ?';
    const [result] = await connection.execute(query, [Gen_Price, Description, DistanceID, priceId]);
    return result.affectedRows;
}

// Delete a price from the database
async function deletePrice(priceId, connection) {
    const query = 'DELETE FROM Price WHERE PriceID = ?';
    const [result] = await connection.execute(query, [priceId]);
    return result.affectedRows;
}

module.exports = {
    fetchPriceById,
    insertPrice,
    updatePrice,
    deletePrice
};
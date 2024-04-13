const mysql = require('mysql2/promise');

// Fetch all vehicles from the database
async function fetchVehicles(connection) {
    const query = 'SELECT * FROM Vehicles';
    const [results] = await connection.execute(query);
    return results;
}

// Fetch a vehicle by ID
async function fetchVehicleById(Vehicle_Request_ID, connection) {
    const query = 'SELECT * FROM Vehicles WHERE Vehicle_Request_ID = ?';
    const [results] = await connection.execute(query, [Vehicle_Request_ID]);
    return results;  // This will return an array of rows; should be 0 or 1 row(s)
}

// Insert a new vehicle into the database
async function insertVehicle(data, connection) {
    const { Type, Make, Model, Year, ClientID, Operable } = data;
    const query = 'INSERT INTO Vehicles (Type, Make, Model, Year, ClientID, Operable) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(query, [Type, Make, Model, Year, ClientID, Operable, Vehicle_Request_ID]);
    return result.insertId;
}

// Update a vehicle in the database
async function updateVehicle(data, Vehicle_Request_ID, connection) {
    const { Type, Make, Model, Year, ClientID, Operable } = data;
    const query = 'UPDATE Vehicles SET Type = ?, Make = ?, Model = ?, Year = ?, ClientID = ?, Operable = ? WHERE Vehicle_Request_ID = ?';
    const [result] = await connection.execute(query, [Type, Make, Model, Year, ClientID, Operable, Vehicle_Request_ID]);
    return result.affectedRows;
}

// Delete a vehicle from the database
async function deleteVehicle(Vehicle_Request_ID, connection) {
    const query = 'DELETE FROM Vehicles WHERE Vehicle_Request_ID = ?';
    const [result] = await connection.execute(query, [Vehicle_Request_ID]);
    return result.affectedRows;
}

module.exports = {
    fetchVehicleById,
    insertVehicle,
    updateVehicle,
    deleteVehicle
};

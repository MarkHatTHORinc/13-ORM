// -----------------------------------------------------------------------------
// Program:  connection.js
// Purpose:  Use the sequelize ORM to create a connection to the database.
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     May 15, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
const Sequelize = require('sequelize');     // ORM package
require('dotenv').config();                 // Keep connection properties hidden

const sequelize = new Sequelize(process.env.MYSQL_URI);  // Create DB Connection


// -----------------------------------------------------------------------------
// Module Exports
// -----------------------------------------------------------------------------
module.exports = sequelize;

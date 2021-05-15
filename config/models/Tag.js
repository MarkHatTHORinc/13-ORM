// -----------------------------------------------------------------------------
// Class:    Tag.js
// Purpose:  Model for Tag Table.
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     May 15, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
const { Model, DataTypes } = require('sequelize');  // Sequelize ORM
const sequelize = require('../connection.js');      // Database connection


// -----------------------------------------------------------------------------
// Class: Tag - Initialize table by extending Sequelize's Model Class
// -----------------------------------------------------------------------------
class Tag extends Model {}

// Set up fields and rules for Tag model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);


// -----------------------------------------------------------------------------
// Module Exports
// -----------------------------------------------------------------------------
module.exports = Tag;

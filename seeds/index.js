// -----------------------------------------------------------------------------
// Program:  index.js
// Purpose:  Build and populate the product table.
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     May 15, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');


// -----------------------------------------------------------------------------
// Function: seedAll
// Purpose:  Call JavaScript Modules to Build/Seed the database tables.
// Input:    <none> 
// Returns:  <none>  
// -----------------------------------------------------------------------------
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);  // Force Normal Exit
};


// -----------------------------------------------------------------------------
// On Load, call seedAll function - create tables & load initial values
// -----------------------------------------------------------------------------
seedAll();

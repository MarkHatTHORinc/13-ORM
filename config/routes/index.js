// -----------------------------------------------------------------------------
// Program:  index.js
// Purpose:  Makes root routings available.
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     May 15, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
const router = require('express').Router();   // Routing & middleware framework
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Let user know that route wasn't found
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});


// -----------------------------------------------------------------------------
// Module Exports
// -----------------------------------------------------------------------------
module.exports = router;
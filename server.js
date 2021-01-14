'use strict';
require('./config/db');
var TodoRoutes = require('./api/routes/todoRoutes');


// Require express and bodyParser
const express = require('express');
const bodyParser = require('body-parser');

// Define port to run express app
const app = express();
const port = process.env.PORT || 3000;
TodoRoutes(app);

// Use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// Add endpoint
app.get('/', (req, res) => {
  res.send('nodejs-rest-api');
});

// Listen to server
app.listen(port, () => {
  console.log('Server running at http://localhost:${port}');
});


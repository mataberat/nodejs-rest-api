// Export mongoose
const mongoose = require('mongoose');

// Assign mongodb connection string to uri and declare options settings
var uri = 'mongodb://root:root@localhost:27017/?authSource=admin'

// Declare a variable named option and assign optional settings
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Connect to mongodb
mongoose.connect(uri, options).then(() => {
  console.log('Database connection established.');
},
  err => {
  {
  console.log("error connecting database instance due to:", err);
  }
});


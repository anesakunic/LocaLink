const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Other middleware and route definitions can go here

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

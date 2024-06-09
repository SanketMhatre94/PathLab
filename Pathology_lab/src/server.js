const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Pathology/Health_Conditions', { useNewUrlParser: true, useUnifiedTopology: true });

const testSchema = new mongoose.Schema({
  "Health Condition": String,
  "Test Name": String,
  "Test Description": String,
  "Price": Number,
  "Lab Name/Address": String
});

const Test = mongoose.model('Test', testSchema);

// API endpoint to fetch all tests
app.get('/api/tests', async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
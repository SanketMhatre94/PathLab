// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/testcards', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Test Card schema
const testCardSchema = new mongoose.Schema({
  title: String,
  parameters: Number,
  specimen: String,
  reportDelivery: String,
  price: Number,
});

// Create the Test Card model
const TestCard = mongoose.model('TestCard', testCardSchema);

// API endpoint to fetch test card data
app.get('/api/testcards', async (req, res) => {
  try {
    const testCards = await TestCard.find();
    res.json(testCards);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
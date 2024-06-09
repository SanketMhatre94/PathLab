const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());

const TestSchema = new mongoose.Schema({
  name: String,
  tests: [{
    name: String,
    specimen: String,
    reportDelivery: String,
    price: Number
  }]
});

const Test = mongoose.model('Test', TestSchema);

app.get('/api/tests/:id', async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    res.json(test);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
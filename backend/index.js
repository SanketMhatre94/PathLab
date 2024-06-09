// backend/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./Pathology_lab/src/Users.js')

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/Pathlogy', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

// Define user schema and model
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Signup route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'User error exists' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// Users Route
app.get('/getUsers', (req, res) => {
  UserModel.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
})
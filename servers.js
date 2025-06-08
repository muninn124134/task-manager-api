// server.js
const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
})
.catch((err) => console.error('MongoDB connection error:', err));

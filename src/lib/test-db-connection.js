const { connectToDatabase } = require('./db'); // Ensure the path is correct

connectToDatabase()
  .then(() => console.log('MongoDB connection successful'))
  .catch(err => console.error('MongoDB connection failed:', err));

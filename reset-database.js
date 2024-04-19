const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://nsisco:6htK1rUwFlxGXzl8@cluster0locallibrarytut.nnneib9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0LocalLIBRARYtutorial';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', async () => {
  try {
    await mongoose.connection.dropDatabase();
    console.log('Database dropped successfully.');
  } catch (error) {
    console.error('Error dropping database:', error);
  } finally {
    mongoose.connection.close();
  }
});

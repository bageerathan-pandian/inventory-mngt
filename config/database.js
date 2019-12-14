
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
// var mongoDB = 'mongodb://localhost:27017/inventory_database';
var mongoDB = process.env.MONGODB_RUL 
mongoose.connect(mongoDB, { 
  keepAlive: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
 })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('MongoDB connection error:', err));

//Get the default connection
var db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
// db.on('connected', console.error.bind(console, 'MongoDB connection success:'));
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

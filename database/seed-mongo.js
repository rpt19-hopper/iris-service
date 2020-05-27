const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');
const option = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  reconnectTries: 30000
};

var data = JSON.parse(fs.readFileSync( 'seedData.json', 'utf8'));

const mongoURI = 'mongodb://localhost:27017/imageservice';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, result) => {
  mongoose.connection.db.dropDatabase();

  var imageSchema = new mongoose.Schema({
    productNumber: String,
    imageUrls: {
      type: Array,
      default: undefined
    },
  });

  var Image = mongoose.model('images', imageSchema);
  Image.insertMany(data, (err, response) => {
    if (err) {
      console.log('error', err);
    } else {
      //console.log(response)
      console.time('end mongo seed time: ')
      console.timeLog('end mongo seed time: ')
      mongoose.connection.close()
    }
  });
});

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });

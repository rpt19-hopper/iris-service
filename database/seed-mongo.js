const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');
// const option = {
//   socketTimeoutMS: 100000,
//   keepAlive: true,
//   reconnectTries: 100000
// };

// var data = JSON.parse(fs.readFileSync( 'seedData.json', 'utf8'));
 //var data2 = JSON.parse(fs.readFileSync( 'seedData2.json', 'utf8'));
var data3 = JSON.parse(fs.readFileSync( 'seedData3.json', 'utf8'));
// var data4 = JSON.parse(fs.readFileSync( 'seedData4.json', 'utf8'));
// var data5 = JSON.parse(fs.readFileSync( 'seedData5.json', 'utf8'));
// var data6 = JSON.parse(fs.readFileSync( 'seedData6.json', 'utf8'));
// var data7 = JSON.parse(fs.readFileSync( 'seedData7.json', 'utf8'));
// var data8 = JSON.parse(fs.readFileSync( 'seedData8.json', 'utf8'));
// var data9 = JSON.parse(fs.readFileSync( 'seedData9.json', 'utf8'));
// var data10 = JSON.parse(fs.readFileSync( 'seedData10.json', 'utf8'));
// var data11 = JSON.parse(fs.readFileSync( 'seedData11.json', 'utf8'));

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
  Image.insertMany(data3, (err, response) => {
    if (err) {
      console.log('error', err);
    } else {
      //console.log(response)
      console.log("HERE")
      console.time('end mongo seed time: ')
      console.timeLog('end mongo seed time: ')
      mongoose.connection.close()
     }
  });

  // Image.insertMany(data2, (err, response) => {
  //   if (err) {
  //     console.log('error', err);
  //   } else {
  //     //console.log(response)
  //     console.time('end mongo seed time: ')
  //     console.timeLog('end mongo seed time: ')
  //     mongoose.connection.close()
  //   }
  // });

  // Image.insertMany(data3, (err, response) => {
  //   if (err) {
  //     console.log('error', err);
  //   } else {
  //     //console.log(response)
  //     console.time('end mongo seed time: ')
  //     console.timeLog('end mongo seed time: ')
  //     mongoose.connection.close()
  //   }
  // });

  // Image.insertMany(data4, (err, response) => {
  //   if (err) {
  //     console.log('error', err);
  //   } else {
  //     //console.log(response)
  //     console.time('end mongo seed time: ')
  //     console.timeLog('end mongo seed time: ')
  //     mongoose.connection.close()
  //   }
  // });

  // Image.insertMany(data5, (err, response) => {
  //   if (err) {
  //     console.log('error', err);
  //   } else {
  //     //console.log(response)
  //     console.time('end mongo seed time: ')
  //     console.timeLog('end mongo seed time: ')
  //     mongoose.connection.close()
  //   }
  // });

  // Image.insertMany(data6, (err, response) => {
  //   if (err) {
  //     console.log('error', err);
  //   } else {
  //     //console.log(response)
  //     console.time('end mongo seed time: ')
  //     console.timeLog('end mongo seed time: ')
  //     mongoose.connection.close()
  //   }
  // });

  // Image.insertMany(data7, (err, response) => {
  //   if (err) {
  //     console.log('error', err);
  //   } else {
  //     //console.log(response)
  //     console.time('end mongo seed time: ')
  //     console.timeLog('end mongo seed time: ')
  //     mongoose.connection.close()
  //   }
  // });

  // Image.insertMany(data8, (err, response) => {
  //   if (err) {
  //     console.log('error', err);
  //   } else {
  //     //console.log(response)
  //     console.time('end mongo seed time: ')
  //     console.timeLog('end mongo seed time: ')
  //     mongoose.connection.close()
  //   }
  // });

  // Image.insertMany(data9, (err, response) => {
  //   if (err) {
  //     console.log('error', err);
  //   } else {
  //     //console.log(response)
  //     console.time('end mongo seed time: ')
  //     console.timeLog('end mongo seed time: ')
  //     mongoose.connection.close()
  //   }
  // });
  // Image.insertMany(data10, (err, response) => {
  //   if (err) {
  //     console.log('error', err);
  //   } else {
  //     //console.log(response)
  //     console.time('end mongo seed time: ')
  //     console.timeLog('end mongo seed time: ')
  //     mongoose.connection.close()
  //   }
  // });
  // Image.insertMany(data11, (err, response) => {
  //   if (err) {
  //     console.log('error', err);
  //   } else {
  //     //console.log(response)
  //     console.time('end mongo seed time: ')
  //     console.timeLog('end mongo seed time: ')
  //     mongoose.connection.close()
  //   }
  // });
});

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });

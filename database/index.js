const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/imageservice';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

var redisClient = require('redis').createClient;
var redis = redisClient(6379, 'localhost');

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });


var imageSchema = new mongoose.Schema({
  productNumber: String,
  imageUrls: {
    type: Array,
    default: undefined
  }
});

var Image = mongoose.model('Image', imageSchema);

// db.on('error', console.error.bind(console, 'connection error:'));

const createImage = (product, callback) => {
  Image.create(product, function(err, result){
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
};

const getImage = (product, callback) => {
  // redis.get(product, function (err, reply) {
  //   if (err) callback(err,null);
  //   else if (reply) //Book exists in cache
  //   callback(null,JSON.parse(reply));
  //   else {
      Image.find(product, (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          console.log(result)
          callback(null, result);
        }
      });
  //   }
  // });
};

const updateImage = (product, newProduct, callback) => {

  Image.findOne(product, function(err, result) {
    if(!err) {
      if(!result) {
        callback(err, null)
      }
      newProduct = JSON.parse(newProduct)
      result = new Image(newProduct)
      result.save(function(err) {
          if(!err) {
            callback(null, result)
          }
          else {
            callback(err, null);
          }
      });
    }
  });
};

const deleteImage = (product, callback) => {
  Image.deleteOne(product, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  db,
  createImage,
  getImage,
  updateImage,
  deleteImage
};

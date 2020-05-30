require('newrelic');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const {createImage, getImage, updateImage, deleteImage} = require('../database/index.js');
const port = process.env.Port || 1234;
const bodyParser = require('body-parser');

// from localhost
// const port = process.env.Port || 8001;

const rootPath = path.join(__dirname, '..', 'client/dist/')

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(rootPath));

app.get('/listing/:productNumber', (req, res) => {
  res.sendFile('index.html', {
    root: `${rootPath}`
  });
});

app.get('/product/:productNumber', (req, res) => {
  const id = req.params['productNumber'];
  getProduct({'productNumber': id.toString()}, (err, product) => {
    if (err) {
      throw err;
    } else {
      const productInfo = JSON.stringify(product);
      res.send(productInfo);
      res.end();
    }
  });
});

app.get('/mainImage/:productNumber', (req, res) => {
  const productNumber = req.params['productNumber'];
  getImage({"productNumber": productNumber}, (err, product) => {
    if (err) {
      throw err;
    } else {
      if (product) {
        const mainImageThumbnail = product[1].imageUrls[0];
        res.end(mainImageThumbnail);
      } else {
        res.send('No Product')
      }
    }
  });
});

app.put('/mainImage/:productNumber', (req, res) => {
  const productNumber = req.params['productNumber'].toString();
  console.log('req.body.newImage', req.body.newImage)
  const newImage = req.body.newImage;
  updateImage({"productNumber": productNumber}, newImage, (err, product) => {
    if (err) {
      throw err;
    } else {
      const mainImageThumbnail = product.imageUrls[0];
      res.end(mainImageThumbnail);
    }
  });
});

app.delete('/mainImage/:productNumber', (req, res) => {
  const productNumber = req.params['productNumber'].toString();
  console.log(productNumber)
  deleteImage({'productNumber': productNumber}, (err, product) => {
    if (err) {
      throw err;
    } else {
      res.end('Product Deleted')
    }
  });
});

app.post('/mainImage', (req, res) => {
  let product = JSON.parse(req.body.product);
  createImage(product, (err, result) => {
    if (err) {
      res.send("ERROR")
      throw err;
    } else {
      res.end(JSON.stringify(result));
    }
  });
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
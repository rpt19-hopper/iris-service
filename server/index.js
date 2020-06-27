require('newrelic');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const compression = require('compression');
//const {createImage, getImage, updateImage, deleteImage} = require('../database/index.js');
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

// app.get('/product/:productNumber', (req, res) => {
//   const id = req.params['productNumber'];
//   getImage({'productNumber': id.toString()}, (err, product) => {
//     if (err) {
//       console.log(err)
//       throw err;
//     } else {
//       const productInfo = JSON.stringify(product);
//       console.log(productInfo)
//       res.send(productInfo);
//       res.end();
//     }
//   });
// });

// app.get('/mainImage/:productNumber', (req, res) => {
//   const productNumber = req.params['productNumber'];
//   getImage({"productNumber": productNumber}, (err, product) => {
//     if (err) {
//       throw err;
//     } else {
//       if (product) {
//         console.log('line 53', product)
//         const mainImageThumbnail = product[0].imageUrls[0];
//         res.end(mainImageThumbnail);
//       } else {
//         res.send('No Product')
//       }
//     }
//   });
// });

// app.put('/mainImage/:productNumber', (req, res) => {
//   const productNumber = req.params['productNumber'].toString();
//   const newImage = req.body.newImage;

//   updateImage({"productNumber": productNumber}, JSON.stringify(newImage), (err, product) => {
//     if (err) {
//       throw err;
//     } else {
//       const mainImageThumbnail = product.imageUrls[0];
//       console.log(mainImageThumbnail)
//       res.end(mainImageThumbnail);
//     }
//   });
// });

// app.delete('/mainImage/:productNumber', (req, res) => {
//   const productNumber = req.params['productNumber'].toString();
//   console.log(productNumber)
//   deleteImage({'productNumber': productNumber}, (err, product) => {
//     if (err) {
//       throw err;
//     } else {
//       res.end('Product Deleted')
//     }
//   });
// });

// app.post('/mainImage', (req, res) => {
//   let product = JSON.parse(req.body.product);
//   createImage(product, (err, result) => {
//     if (err) {
//       res.send("ERROR")
//       throw err;
//     } else {
//       res.end(JSON.stringify(result));
//     }
//   });
// });


app.get('/loaderio-beebe433c4adc85b9aa8e09a0b1668a4/', (req, res) => {
  res.sendFile('loaderio-beebe433c4adc85b9aa8e09a0b1668a4.txt', {
    root: `${rootPath}`
  });
})
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
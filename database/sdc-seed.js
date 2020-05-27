const fs = require ('fs');
const imageFile = fs.createWriteStream('/private/tmp/seedImageData.csv');
const productFile = fs.createWriteStream('/private/tmp/seedProductData.csv');

var randomNumberGenerator = () => {
  var randomNumber = 1000 + Math.floor(Math.random() * 1000);
  return randomNumber;
}
var createProductData = (productNumber) => {
  let i=0;
  let seedProductsStr = '';

  while (i < 10) {
    var productNumberStr = `${productNumber}`;
    productNumber++;
    seedProductsStr += `${productNumberStr} \n`;
    i++
  }

  return seedProductsStr;
}

var createImageData = (productNumber, randomNumber) => {
  let i=0;
  let seedImagesStr = '';

  while (i < 10) {
    var productNumber = productNumber;
    var imageUrlStr = `${productNumber},`;
    for (var j = 0; j < randomNumber; j++) {
      var randomImageId = randomNumberGenerator();
      var imageUrl = `https://i.picsum.photos/id/${randomImageId}/720/455.jpg \n`
      imageUrlStr += imageUrl;
      seedImagesStr += `${imageUrlStr}`;
      imageUrlStr = `${productNumber},`;
    }
    i++
  }

  return seedImagesStr;
}
// var createData = (productNumber, randomNumber) => {
// 	var i = 0;
// 	let seedDataStr = '';

// 	while (i < 10) {
//     var productNumber = productNumber;
// 		var imageUrlsStr = `${productNumber},`;
//     let images = [];

//     for (var j = 0; j < randomNumber; j++) {
//       var randomImageId = randomNumberGenerator();
//       var imageThumbnailUrl = `https://i.picsum.photos/id/${randomImageId}/1440/960.jpg`;
//       var imageUrl = `https://i.picsum.photos/id/${randomImageId}/720/455.jpg`;

//       images.push(imageUrl, imageThumbnailUrl)
//     }
//     imageUrlsStr += `${JSON.stringify(images).replace(/\[/gm, '{').replace(/\]/gm, '}').replace(/\"/gm, '')}`;
//     productNumber++;
//     seedDataStr += `${imageUrlsStr} \n`;
// 		i++
// 	}
//   return seedDataStr;

// }

var writeToCSV = (productNumber) => {
  let i = 0;
  while (i < 1803082){
    let randomNumber = 1 + Math.floor(Math.random() * 10)
    // file.write(createData(productNumber, randomNumber))
    productFile.write(createProductData(productNumber))
    imageFile.write(createImageData(productNumber, randomNumber))
    productNumber = productNumber+1;
    i++
  }

  productFile.end();
  imageFile.end()
  }

writeToCSV(10000, 1)
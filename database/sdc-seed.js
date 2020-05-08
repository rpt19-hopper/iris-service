const fs = require ('fs');
const file = fs.createWriteStream('./seedData.csv');

var randomNumberGenerator = () => {
  var randomNumber = 1000 + Math.floor(Math.random() * 1000);
  return randomNumber;
}

var createData = (productNumber, randomNumber) => {
	var i = 0;
	let seedDataStr = '';

	while (i < 10) {
    var productNumber = productNumber;
		var imageUrlsStr = `${productNumber},`;

    for (var j = 0; j < randomNumber; j++) {
      var randomImageId = randomNumberGenerator();
      var imageThumbnailUrl = `https://i.picsum.photos/id/${randomImageId}/1440/960.jpg`;
      var imageUrl = `https://i.picsum.photos/id/${randomImageId}/720/455.jpg`;

      if (j === randomNumber-1) {
        imageUrlsStr += `${imageUrl},${imageThumbnailUrl}`;
      } else {
        imageUrlsStr += `${imageUrl}, ${imageThumbnailUrl},`;
      }
    }

    productNumber++;
    seedDataStr += `${imageUrlsStr} \n`;
		i++
	}
  return seedDataStr;

}

var writeToCSV = (productNumber) => {
  let i = 0;
  while (i < 100000){
    let randomNumber = 1 + Math.floor(Math.random() * 10)
    file.write(createData(productNumber, randomNumber))
    productNumber = productNumber+10;
    i++
  }

  file.end();
  }

writeToCSV(10000, 1)
const fs = require ('fs');
const file = fs.createWriteStream('./seedData.json');

var randomNumberGenerator = () => {
  var randomNumber = 1000 + Math.floor(Math.random() * 1000);
  return randomNumber;
}

var createData = (productNumber, randomNumber) => {
	var i = 0;
	let data = [];

	while (i < 10) {
		let imageUrls = []
    var productNumber = productNumber;

    for (var j = 0; j < randomNumber; j++) {
      var randomImageId = randomNumberGenerator();
      var imageThumbnailUrl = `https://i.picsum.photos/id/${randomImageId}/1440/960.jpg`;
      var imageUrl = `https://i.picsum.photos/id/${randomImageId}/720/455.jpg`;
			imageUrls.push(imageThumbnailUrl);
			imageUrls.push(imageUrl)
		}

		data.push(
			{
				'productNumber' : productNumber,
				'imageUrls': imageUrls
			}
		)

    productNumber++;
		i++
	}
  return JSON.stringify(data);

}

var writeToJSON = (productNumber) => {
  let i = 0;
  while (i < 100000){
    let randomNumber = 1 + Math.floor(Math.random() * 10)
    file.write(createData(productNumber, randomNumber))
    productNumber = productNumber+10;
    i++
  }

  file.end();
  }

writeToJSON(10000, 1)
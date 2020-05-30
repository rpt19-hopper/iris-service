const fs = require('fs');
const path = require('path');


var randomNumberGenerator = () => {
  var randomNumber = 1000 + Math.floor(Math.random() * 1000);
  return randomNumber;
}

let data = [];

var createData = (productNumber, randomNumber) => {
	var i = 0;
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

		data.push({'productNumber' : productNumber,'imageUrls': imageUrls});
    productNumber++;
		i++
	}

}


// function chunk(array, size) {
//   const chunked_arr = [];
//   let copied = [...array]; // ES6 destructuring
//   const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer
//   console.log(numOfChild)
//   for (let i = 0; i < numOfChild; i++) {
//     chunked_arr.push(JSON.stringify(copied.splice(0, size)));
//   }
//   return String(chunked_arr);
// }

var writeToJSON = (productNumber, callback) => {
  let i = 0;
  while (i < 100000){
    let randomNumber = 1 + Math.floor(Math.random() * 5)
    createData(productNumber, randomNumber)
    productNumber = productNumber+10;
    i++
  }
  callback()
}


writeToJSON(10100000, () => {
  console.time('start seed time: ')
  console.timeLog('start seed time')
  // let dataChunked = chunk(data, 100);
  fs.writeFileSync(path.resolve('seedData.json'), JSON.stringify(data));
  console.time('end seed time: ')
  console.timeLog('end seed time');
})

writeToJSON(10000, 1)

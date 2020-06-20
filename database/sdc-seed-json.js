const fs = require('fs');
const path = require('path');


var randomNumberGenerator = () => {
  var randomNumber = 100 + Math.floor(Math.random() * 100);
  return randomNumber;
}

let data = []

var createData = (productNumber, randomNumber) => {
	var i = 0;
	while (i < 10) {
		let imageUrls = []
    var productNumber = productNumber;

    for (var j = 0; j < randomNumber; j++) {
      var randomImageId = randomNumberGenerator();
      var imageThumbnailUrl = `https://picsum.photos/id/${randomImageId}/1440/960.jpg`;
      var imageUrl = `https://picsum.photos/id/${randomImageId}/720/455.jpg`;
			imageUrls.push(imageThumbnailUrl);
			imageUrls.push(imageUrl)

    }

		data.push({'productNumber' : productNumber,'imageUrls': imageUrls});
    productNumber++;
		i++
	}

}

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

let recurse = (number) => {
  data = []
  writeToJSON(number, () => {
    console.time()
    console.timeLog()
    if (number < 1000000) {
      let str = JSON.stringify(data);
      fs.writeFile(path.resolve('seedData.json'), str, (success, err) => {
        if (err) throw err
        recurse(number+1000000)
      });
    }

    if (number > 1000000 && number < 2000000) {
      let str = JSON.stringify(data)
      fs.writeFile(path.resolve('seedData2.json'), str, (success, err) => {
        if (err) throw err
        recurse(number+1000000)
      });
    }

    if (number > 2000000 && number < 3000000) {
      let str = JSON.stringify(data)
      fs.writeFile(path.resolve('seedData3.json'), str, (success, err) => {
        if (err) throw err
        recurse(number+1000000)
      });
    }

    if (number > 3000000 && number < 4000000) {
      let str = JSON.stringify(data)
      fs.writeFile(path.resolve('seedData4.json'), str, (success, err) => {
        if (err) throw err
        recurse(number+1000000)
      });
    }

    if (number > 4000000 && number < 5000000) {
      let str = JSON.stringify(data)
      fs.writeFile(path.resolve('seedData5.json'), str, (success, err) => {
        if (err) throw err
        recurse(number+1000000)
      });
    }

    if (number > 5000000 && number < 6000000) {
      let str = JSON.stringify(data)
      fs.writeFile(path.resolve('seedData6.json'), str, (success, err) => {
        if (err) throw err
        recurse(number+1000000)
      });
    }

    if (number > 6000000 && number < 7000000) {
      let str = JSON.stringify(data)
      fs.writeFile(path.resolve('seedData7.json'), str, (success, err) => {
        if (err) throw err
        recurse(number+1000000)
      });
    }

    if (number > 7000000 && number < 8000000) {
      let str = JSON.stringify(data)
      fs.writeFile(path.resolve('seedData8.json'), str, (success, err) => {
        if (err) throw err
        recurse(number+1000000)
      });
    }

    if (number > 8000000 && number < 9000000) {
      let str = JSON.stringify(data)
      fs.writeFile(path.resolve('seedData9.json'), str, (success, err) => {
        if (err) throw err
        recurse(number+1000000)
      });
    }

    if (number > 9000000 && number < 10000000) {
      let str = JSON.stringify(data)
      fs.writeFile(path.resolve('seedData10.json'), str, (success, err) => {
        if (err) throw err
        recurse(number+1000000)
      });
    }

    if (number > 10000000 && number < 11000000) {
      let str = JSON.stringify(data)
      fs.writeFile(path.resolve('seedData11.json'), str, (success, err) => {
        if (err) throw err
        recurse(number+1000000)
      });
    }

    console.time()
    console.timeLog()
  });
}

recurse(100000)
// 1999999
// writeToJSON(1000000, () => {
//   console.time()
//   // let dataChunked = chunk(data, 100);
//   console.log(data[data.length-1]);
//   console.log(data.length)
//   // fs.appendFile(path.resolve('seedData.json'), JSON.stringify(data));
//   console.time()
// });

// recursion
// CPU
// RAMS
// larger instance
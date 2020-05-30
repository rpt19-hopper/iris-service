const pg = require('pg');

const connection = "postgres://root:SoMePaSsWoRd@localhost:5432/postgres";
const pgClient = new pg.Client(connection);

const imageTable = 'DROP TABLE IF EXISTS images;' +
	'CREATE TABLE IF NOT EXISTS images (' +
	'id SERIAL,' +
	'product_number integer,' +
	'image text)';
const productTable = 'DROP TABLE IF EXISTS products;' +
	'CREATE TABLE IF NOT EXISTS products (' +
	'id SERIAL,' +
	'product_number integer)';


var importToProductTable = "COPY products (product_number) FROM '/private/tmp/seedProductData.csv' WITH (FORMAT csv)";
var importToImageTable = "COPY images (product_number, image) FROM '/private/tmp/seedImageData.csv' WITH (FORMAT csv)";

pgClient.connect().then(() => {

	pgClient.query(productTable).then(() => {
		console.time('start postgres seed time: ')
    console.timeLog('start postgres seed time: ')
		pgClient.query(importToProductTable).then((products) => {
			console.log(`${products.rowCount} rows inserted.`)
		}).catch(err => {
			console.log('images import error', err)
		})
	}).catch(err => {
		console.log('images table creation error', err)
	}).then(()=> {
		pgClient.query(imageTable).then(() => {
			pgClient.query(importToImageTable).then((images) => {
				console.log(`${images.rowCount} rows inserted.`)
				console.time('end postgres seed time: ')
      	console.timeLog('end postgres seed time: ')
				pgClient.end();
			}).catch(err => {
				console.log('images import error', err)
			})
		}).catch(err => {
			console.log('images table creation error', err)
		})
	})
}).catch(err => {
	console.log('connection error', err)
})

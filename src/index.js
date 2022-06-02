const express = require('express');
const hbs = require('express-handlebars');
const connectDatabase = require('./models/db');
const router = require('./router/router');

const app = express();
const port = 3000;

(async function start() {
	app.engine('hbs', hbs.create({
		extname: '.hbs'
	}).engine);
	app.set('view engine', 'hbs');

	// Connect database
	await connectDatabase();

	app.use(express.urlencoded({ extended: true }));
	app.use(router());

	app.listen(port, () => {
		console.log(`Server is listening on port ${port}...`)
		console.log(`>>> URL: http://localhost:${port}`);
	})
})(); 
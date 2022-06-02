const mongoose = require('mongoose');

const databaseString = 'mongodb://localhost:27017/art-galley';

// Models
require('./User');
require('./Publication');

async function connectDatabase() {
	await mongoose.connect(databaseString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}, () => {
		console.log('Database connected');
	})

	mongoose.connection.on('error', (err) => {
		console.error('Database error');
		console.error(err.message);
	})
}

module.exports = connectDatabase;
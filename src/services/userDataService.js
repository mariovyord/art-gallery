const User = require('../models/User');

async function getUserById(id) {
	const userData = User.findById(id).lean();
	return userData;
}

module.exports = {
	getUserById,
}
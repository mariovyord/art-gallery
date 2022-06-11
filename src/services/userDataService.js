const User = require('../models/User');
const Publication = require('../models/Publication');

async function getUserById(id) {
	const userData = User.findById(id).populate('publications').lean();
	return userData;
}

async function getPublicationSharedByUser(userId) {
	return Publication.find({ 'users shared': userId });
}

module.exports = {
	getUserById,
	getPublicationSharedByUser,
}
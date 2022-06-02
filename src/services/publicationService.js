const Publication = require('../models/Publication');

async function getAllPublications() {
	const pubs = Publication.find({}).lean();
	return pubs;
}

async function getPublicationById(_id) {
	const pub = Publication.findOne({ _id: _id }).populate('author').lean();
	return pub;
}

module.exports = {
	getAllPublications,
	getPublicationById,
}
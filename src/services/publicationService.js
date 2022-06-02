const Publication = require('../models/Publication');

async function getAllPublications() {
	const pubs = Publication.find({}).lean();
	return pubs;
}

module.exports = {
	getAllPublications,
}
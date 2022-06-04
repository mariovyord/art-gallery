const Publication = require('../models/Publication');

async function getAllPublications() {
	const pubs = Publication.find({}).lean();
	return pubs;
}

async function getPublicationById(_id) {
	const pub = Publication.findOne({ _id: _id }).populate('author').lean();
	return pub;
}

async function sharePublication(publicationId, userId) {
	try {
		const pub = await Publication.findOne({ _id: publicationId }, { 'users shared': 1 });
		console.log(pub)
		pub['users shared'].push(userId);
		console.log(pub);
		pub.save();
	} catch (err) {
		console.log(err.message);
	}
}

module.exports = {
	getAllPublications,
	getPublicationById,
	sharePublication,
}
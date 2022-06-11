const Publication = require('../models/Publication');
const User = require('../models/User');

async function getAllPublications() {
	const pubs = Publication.find({}).lean();
	return pubs;
}

async function getPublicationById(_id) {
	const pub = Publication.findOne({ _id: _id }).populate('author').lean();
	return pub;
}

async function createPublication(data) {
	try {
		const pub = new Publication(data);
		pub.save();
		if (data.author) {
			const user = await User.findOne({ _id: data.author });
			user['my publications'].push(pub._id);
			user.save();
		}
	} catch (err) {
		throw err.message;
	}
}

async function updatePublication(_id, data) {
	try {
		console.log('ID', _id);
		const res = await Publication.updateOne({ _id: _id }, data);
		console.log(res.modifiedCount)
	} catch (err) {
		throw err.message;
	}
}

async function sharePublication(publicationId, userId) {
	try {
		const pub = await Publication.findOne({ _id: publicationId }, { 'users shared': 1 });
		pub['users shared'].push(userId);
		pub.save();
	} catch (err) {
		throw err.message;
	}
}

async function deletePublication(publicationId) {
	try {
		await Publication.deleteOne({ _id: publicationId });
	} catch (err) {
		throw err.message;
	}
}

module.exports = {
	getAllPublications,
	getPublicationById,
	createPublication,
	sharePublication,
	deletePublication,
	updatePublication,
}
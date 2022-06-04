const { getPublicationById } = require("../services/publicationService");

module.exports = async (req, res) => {
	const pub = await getPublicationById(req.params.id);
	let isOwner = false;
	let hasShared = false;
	if (req.app.locals.hasUser) {
		isOwner = pub.author._id.toString() === req.session.user._id;
		hasShared = pub['users shared'].includes(req.session.user._id);
	}
	res.render('details', { pub, isOwner, hasShared });
}
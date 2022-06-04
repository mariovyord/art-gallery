const { getPublicationById, sharePublication, deletePublication } = require("../services/publicationService");

module.exports = {
	async get(req, res) {
		const pub = await getPublicationById(req.params.id);
		let isOwner = false;
		let hasShared = false;
		if (req.app.locals.hasUser) {
			isOwner = pub.author._id.toString() === req.session.user._id;
			hasShared = pub['users shared'].map(x => x.toString()).includes(req.session.user._id);
		}
		res.render('details', { pub, isOwner, hasShared });
	},
	async share(req, res) {
		const publicationId = req.params.id;
		try {
			const userId = req.session.user._id;
			await sharePublication(publicationId, userId);
			res.redirect('/');
		} catch (err) {
			console.log(err.message);
			res.redirect('/publication/details/' + publicationId);
		}
	},
	async delete(req, res) {
		const publicationId = req.params.id;
		try {
			await deletePublication(publicationId);
			res.redirect('/');
		} catch (err) {
			console.log(err.message);
			res.redirect('/publication/details/' + publicationId);
		}
	}
}
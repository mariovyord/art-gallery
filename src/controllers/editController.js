const { getPublicationById, updatePublication } = require("../services/publicationService");

module.exports = {
	async get(req, res) {
		try {
			const pub = await getPublicationById(req.params.id);
			res.render('edit', { pub });
		} catch (err) {
			console.log(err.message);
		}
	},
	async post(req, res) {
		class Publication {
			constructor(data) {
				this.title = data.title;
				this['painting technique'] = data.technique;
				this['art picture'] = data.picture;
				this['certificate of authenticity'] = data.certificate;
			}
		}
		const pub = new Publication(req.body);
		console.log(pub)
		try {
			await updatePublication(req.params.id, pub)
			res.redirect('/');
		} catch (err) {
			err.message;
			res.redirect('/publications/create');
		}
	}
}
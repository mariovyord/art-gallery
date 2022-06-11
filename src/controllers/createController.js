const { createPublication } = require("../services/publicationService");

module.exports = {
	get(req, res) {
		res.render('create');
	},
	async post(req, res) {
		class Publication {
			constructor(data) {
				this.title = data.title;
				this['painting technique'] = data.technique;
				this['art picture'] = data.picture;
				this['certificate of authenticity'] = data.certificate;
				this.author = data.author;
			}
		}
		req.body.author = req.session.user._id
		const pub = new Publication(req.body);
		try {
			await createPublication(pub)
			res.redirect('/');
		} catch (err) {
			err.message;
			res.redirect('/publications/create');
		}
	}
}
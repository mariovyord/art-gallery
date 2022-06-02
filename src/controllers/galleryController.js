const { getAllPublications } = require("../services/publicationService");

module.exports = async (req, res) => {
	const pubs = await (await getAllPublications()).map(x => ({
		_id: x._id.toString(),
		title: x.title,
		'certificate': x['certificate of authenticity'],
		'picture': x['art picture'],
	}));
	res.render('gallery', { pubs });
}
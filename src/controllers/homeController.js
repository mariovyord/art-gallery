const { getAllPublications } = require("../services/publicationService");

module.exports = async (req, res) => {
	const pubs = await (await getAllPublications()).map(x => ({
		_id: x._id.toString(),
		title: x.title,
		shared: x['users shared'].length,
	}));
	res.render('home', { pubs });
}
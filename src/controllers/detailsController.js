const { getPublicationById } = require("../services/publicationService");

module.exports = async (req, res) => {
	const pub = await getPublicationById(req.params.id);
	res.render('details', { pub });
}
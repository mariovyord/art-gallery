const { getUserById, getPublicationSharedByUser } = require("../services/userDataService");

module.exports = async (req, res) => {
	const userId = req.session.user._id;
	const promises = await Promise.all([
		getUserById(userId),
		getPublicationSharedByUser(userId)
	]);
	const userData = promises[0];
	const shares = promises[1];
	userData.publications = userData.publications.map(x => x = x.title).join(', ');
	userData.shares = shares.map(x => x.title).join(', ');
	res.render('profile', { userData });
}
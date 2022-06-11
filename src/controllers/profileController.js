const { getUserById } = require("../services/userDataService");

module.exports = async (req, res) => {
	const userId = req.session.user._id;
	const userData = await getUserById(userId);
	userData.publications = userData.publications.map(x => x = x.title).join(', ');
	console.log(userData.publications);
	res.render('profile', { userData });
}
const { getUserById } = require("../services/userDataService");

module.exports = async (req, res) => {
	const userId = req.session.user._id;
	const userData = await getUserById(userId);
	console.log(userData);
	res.render('profile', { userData });
}
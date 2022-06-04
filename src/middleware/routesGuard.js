module.exports = () => (req, res, next) => {
	if (req.app.locals.hasUser) {
		next();
	} else {
		res.redirect('/user/login');
	}
}
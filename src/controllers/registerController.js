module.exports = {
	get(req, res) {
		res.render('register');
	},
	async post(req, res) {
		try {
			await req.auth.signup(req.body.username, req.body.password, req.body.address);
			res.redirect('/')
		} catch (err) {
			console.log(err.message);
		}
	}
}
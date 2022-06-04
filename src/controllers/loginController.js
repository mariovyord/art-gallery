module.exports = {
	get(req, res) {
		res.render('login');
	},
	async post(req, res) {
		try {
			await req.auth.login(req.body.username, req.body.password);

			res.redirect('/')
		} catch (err) {
			res.redirect('/user/login');
		}
	}
}
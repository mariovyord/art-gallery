module.exports = {
	get(req, res) {
		res.render('register');
	},
	async post(req, res) {
		try {
			if (req.body.password != req.body.rePassword) {
				throw new Error('Passwords should match')
			}
			await req.auth.signup(req.body.username, req.body.password, req.body.address);
			res.redirect('/')
		} catch (err) {
			console.log(err)
			res.render('register', {
				user: {
					username: req.body.username,
					address: req.body.address
				}, error: err.message
			})
		}
	}
}
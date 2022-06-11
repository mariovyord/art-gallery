const User = require('../models/User');

async function signup(session, username, password, address) {
	try {
		const user = new User({
			username,
			password,
			address,
		});
		await user.save();
		session.user = {
			_id: user._id,
			username: user.username,
		}
		console.log('Sign up successful');
	} catch (err) {
		throw new Error(err.message);
	}
}

async function login(session, username, password) {
	const user = await User.findOne({ username });
	const isCorrectPassword = await user.comparePassword(password);
	if (user && isCorrectPassword) {
		session.user = {
			_id: user._id,
			username: user.username,
		}
		console.log('Login successful');
		return true;
	} else {
		throw new Error('Incorect username or password');
	}
}

async function logout(session) {
	delete session.user;
	console.log('Logout successful');
}

module.exports = () => (req, res, next) => {
	if (req.session.user) {
		req.app.locals.user = req.session.user;
		req.app.locals.hasUser = true;
	} else {
		req.app.locals.hasUser = false;
	}
	req.auth = {
		signup: (...params) => signup(req.session, ...params),
		login: (...params) => login(req.session, ...params),
		logout: () => logout(req.session),
	}
	next();
}
const express = require('express');
const userRouter = express.Router();

userRouter.use('/style', express.static('public'));

userRouter.route('/login')
	.get((req, res) => {
		res.render('login')
	})
	.post((req, res) => {
		res.render('login')
	})

userRouter.route('/register')
	.get((req, res) => {
		res.render('register')
	})
	.post((req, res) => {
		res.render('register')
	})

userRouter.route('/:id')
	.get((req, res) => {
		res.render('profile')
	})
	.post((req, res) => {
		res.render('profile')
	})

module.exports = () => userRouter;
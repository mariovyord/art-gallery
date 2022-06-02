const express = require('express');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const userProfileController = require('../controllers/userProfileController');
const userRouter = express.Router();

userRouter.use('/style', express.static('public'));

userRouter.route('/login')
	.get(loginController)
	.post(loginController);

userRouter.route('/register')
	.get(registerController)
	.post(registerController);

userRouter.route('/:id')
	.get(userProfileController)
	.post(userProfileController);

module.exports = () => userRouter;
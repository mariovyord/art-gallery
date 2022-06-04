const express = require('express');
const loginController = require('../controllers/loginController');
const logoutController = require('../controllers/logoutController');
const registerController = require('../controllers/registerController');
const userProfileController = require('../controllers/userProfileController');
const userRouter = express.Router();

userRouter.use('/style', express.static('public'));

userRouter.route('/login')
	.get(loginController.get)
	.post(loginController.post);

userRouter.route('/register')
	.get(registerController.get)
	.post(registerController.post);

userRouter.get('/logout', logoutController);

userRouter.route('/:id')
	.get(userProfileController)
	.post(userProfileController);

module.exports = () => userRouter;
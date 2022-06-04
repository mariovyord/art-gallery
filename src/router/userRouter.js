const express = require('express');
const loginController = require('../controllers/loginController');
const logoutController = require('../controllers/logoutController');
const registerController = require('../controllers/registerController');
const userProfileController = require('../controllers/userProfileController');
const userRouter = express.Router();
const routesGuard = require('../middleware/routesGuard');

userRouter.route('/login')
	.get(loginController.get)
	.post(loginController.post);

userRouter.route('/register')
	.get(registerController.get)
	.post(registerController.post);

userRouter.get('/logout', routesGuard(), logoutController);

userRouter.route('/:id')
	.get(routesGuard(), userProfileController)
	.post(routesGuard(), userProfileController);

module.exports = () => userRouter;
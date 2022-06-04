const express = require('express');
const createController = require('../controllers/createController');
const detailsController = require('../controllers/detailsController');
const routesGuard = require('../middleware/routesGuard');
const publicationRouter = express.Router();

publicationRouter.use('/style', express.static('public'));

publicationRouter.route('/create')
	.get(routesGuard(), createController)
	.post(routesGuard(), createController);

publicationRouter.get('/:id', detailsController);

module.exports = () => publicationRouter;
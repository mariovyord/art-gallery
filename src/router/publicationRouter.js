const express = require('express');
const createController = require('../controllers/createController');
const detailsController = require('../controllers/detailsController');
const publicationRouter = express.Router();

publicationRouter.use('/style', express.static('public'));

publicationRouter.route('/create')
	.get(createController)
	.post(createController);

publicationRouter.get('/:id', detailsController);

module.exports = () => publicationRouter;
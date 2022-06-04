const express = require('express');
const createController = require('../controllers/createController');
const detailsController = require('../controllers/detailsController');
const editController = require('../controllers/editController');
const routesGuard = require('../middleware/routesGuard');
const publicationRouter = express.Router();

// publicationRouter.use('/style', express.static('public'));

publicationRouter.route('/create')
	.get(routesGuard(), createController.get)
	.post(routesGuard(), createController.post);
publicationRouter.route('/edit/:id')
	.get(routesGuard(), editController.get)
	.post(routesGuard(), editController.post);

publicationRouter.get('/share/:id', routesGuard(), detailsController.share);
publicationRouter.get('/delete/:id', routesGuard(), detailsController.delete);
publicationRouter.get('/:id', detailsController.get);

module.exports = () => publicationRouter;
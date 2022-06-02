const express = require('express');
const publicationRouter = express.Router();

publicationRouter.use('/style', express.static('public'));

publicationRouter.route('/create')
	.get((req, res) => {
		res.render('create')
	})
	.post((req, res) => {
		res.render('create')
	})

publicationRouter.get('/:id', (req, res) => {
	console.log(req.params.id);
	res.render('details');
})

module.exports = () => publicationRouter;
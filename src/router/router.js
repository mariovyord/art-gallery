const express = require('express');
const logger = require('../middleware/logger');
const publicationRouter = require('./publicationRouter');
const userRouter = require('./userRouter');
const router = express.Router();

// Middleware
router.use(logger());
router.use('/style', express.static('public'));

router.get('/', (req, res) => {
	res.render('home');
})

router.get('/gallery', (req, res) => {
	res.render('gallery');
})

// Other routes
router.use('/publication', publicationRouter());
router.use('/user', userRouter());


module.exports = () => router;


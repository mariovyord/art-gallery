const express = require('express');
const galleryController = require('../controllers/galleryController');
const session = require('express-session');
const homeController = require('../controllers/homeController');
const logger = require('../middleware/logger');
const publicationRouter = require('./publicationRouter');
const userRouter = require('./userRouter');
const authSecrvice = require('../services/authSecrvice');
const router = express.Router();

// Middleware
router.use(logger());
router.use(session({
	secret: 'very secret pass',
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: 'auto',
	}
}));
router.use(authSecrvice());
router.use('/style', express.static('public'));

router.get('/', homeController);
router.get('/gallery', galleryController);

router.use('/publication', publicationRouter());
router.use('/user', userRouter());

router.all('*', (req, res) => {
	res.render('404');
});

module.exports = () => router;


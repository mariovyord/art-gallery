const express = require('express');
const galleryController = require('../controllers/galleryController');
const homeController = require('../controllers/homeController');
const logger = require('../middleware/logger');
const publicationRouter = require('./publicationRouter');
const userRouter = require('./userRouter');
const router = express.Router();

// Middleware
router.use(logger());
router.use('/style', express.static('public'));

router.get('/', homeController);
router.get('/gallery', galleryController);

router.use('/publication', publicationRouter());
router.use('/user', userRouter());

module.exports = () => router;


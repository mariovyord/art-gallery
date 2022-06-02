const express = require('express');
const logger = require('../middleware/logger');
const router = express.Router();

// Middleware
router.use(logger());
router.use('/style', express.static('public'));

router.get('/', (req, res) => {
	res.render('home');
})

module.exports = router;


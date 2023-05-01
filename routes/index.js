const router = require('express').Router();

router.use('/auth', require('./authRoutes'));
router.use('/rank', require('./rankingRoutes'));

module.exports = router;

const express = require('express');
const router = express.Router();
const getData = require('../controllers/getData');


router.get('/meal', getData.getMeal)


module.exports = router;
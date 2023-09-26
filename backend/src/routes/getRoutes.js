const express = require('express');
const router = express.Router();
const getData = require('../controllers/getData');


router.get('/meal/:id', getData.getMeal)


module.exports = router;
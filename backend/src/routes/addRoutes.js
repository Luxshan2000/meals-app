const express = require('express');
const router = express.Router();
const addData = require('../controllers/addData');


router.post('/meal', addData.addMeal)


module.exports = router;
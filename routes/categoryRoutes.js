const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

router.post('/createCategory', categoryController.create);
router.get('/readCategories', categoryController.read);


module.exports = router;
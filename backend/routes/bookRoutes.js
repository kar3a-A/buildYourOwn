

const bookRoutes = require('express').Router();
const bookController = require('../controllers/bookController.js');

bookRoutes.get('', bookController.index);
bookRoutes.post('', bookController.post);

module.exports = bookRoutes
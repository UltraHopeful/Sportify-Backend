const express = require('express')
const route = express.Router();

const merchandiseController = require('../controllers/merchandise')


route.get('/api/merchandise/display-merchandise', merchandiseController.displayMerchandise)
route.post('/api/merchandise/add-merchandise', merchandiseController.addMerchandise)
route.put('/api/merchandise/update-merchandise/:id', merchandiseController.updateMerchandise)

module.exports = route 
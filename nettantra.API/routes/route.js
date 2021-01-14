const express = require('express');
const controller = require('../controller/controller')

const router = express.Router();
router.get('/api/getAllData', controller.getAllData);
router.post('/api/addNewData', controller.addNewData);
router.post('/api/authUser', controller.authUser);

module.exports = router;
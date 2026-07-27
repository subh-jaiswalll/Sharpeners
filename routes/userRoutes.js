
const express = require('express');

const router = express.Router();

const userController = require('../controller/usersController.js')
router.get('/', userController.getAllUsers);
router.post('/', userController.getAllUsersById)
router.get('/:id', userController.addUsers);
module.exports = router;
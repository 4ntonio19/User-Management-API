const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

const url = '/users/'
router.get(`${url}`, userController.listUsers);
router.get(`${url}:id`, userController.listUserById);

router.post(`${url}`, userController.createUser);


module.exports = router;
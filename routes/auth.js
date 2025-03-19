const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const authController = require('../controllers/authController')

const registerValidator = [
    body('username', 'Username cannot be empty!').not().isEmpty(),
    body('password', 'Password cannot be empty.').not().isEmpty()
]

router.post('/register',registerValidator, authController.register)

module.exports = router


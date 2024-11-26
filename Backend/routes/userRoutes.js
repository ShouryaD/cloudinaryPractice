const express = require('express')
const { registerUser, login } = require('../controller/userController')
const router = express.Router()

router.post('/registerUser', registerUser)
router.post('/loginUser', login)

module.exports = router
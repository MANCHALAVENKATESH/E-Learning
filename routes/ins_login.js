const express = require('express');
const userDetail = require('../controllers/inst_login')
const routes = express.Router()



routes.post('/login', userDetail.loginVerification)

module.exports = routes
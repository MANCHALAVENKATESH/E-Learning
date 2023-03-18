const express = require('express');
const routes = express.Router()

const userDetail = require('../controllers/users')
routes.get('/:Email',userDetail.userProfileDetails)

module.exports = routes
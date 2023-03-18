const express = require('express');
const routes = express.Router()

const enrollDetail = require('../controllers/updateuser')
routes.post('/', enrollDetail.handleEnroll)
routes.get('/',enrollDetail.getUserDetails)
routes.post('/e',enrollDetail.enroll)
module.exports = routes




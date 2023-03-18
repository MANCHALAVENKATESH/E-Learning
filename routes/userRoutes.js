const express = require('express');
const routes = express.Router()

const userDetail = require('../controllers/users')
routes.post('/', userDetail.userRegistrationController)
routes.post('/login', userDetail.loginVerification)
routes.post('/logout',userDetail.LogOutUser)
routes.get('/get',userDetail.getusercount)
routes.get('/get_user',userDetail.tableuserdata)

module.exports = routes



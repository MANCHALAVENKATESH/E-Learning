const express = require('express');
const routes = express.Router()

const instDetail = require('../controllers/admin_instruct_info')
routes.get('/',instDetail.instructorInfo)
routes.post('/get',instDetail.getinstructorInfo)

routes.post('/',instDetail.acceptInstructor)


module.exports = routes
const express = require('express');
const routes = express.Router()

const InstructorDetail = require('../controllers/Instructor')
routes.post('/', InstructorDetail.InstructorRegistrationController)

routes.get('/get_instructor',InstructorDetail.instructordata)


module.exports = routes

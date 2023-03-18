const express = require('express')
const routes = express.Router()

const courseRoute = require('../controllers/courseControllers')
const moduleRoute = require('../controllers/sectionControllers')

routes.post('/c',courseRoute.addCourse)
routes.post('/:course_name',moduleRoute.getSection)
routes.get('/course/:Instrutor_Email',moduleRoute.getInsCourse)
// routes.post('/getcourse',moduleRoute.getcourse)

module.exports = routes
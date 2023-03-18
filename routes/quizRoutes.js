const express = require('express')
const routes = express.Router()

const quizRoute = require('../controllers/quizControllers')
const sectionRoute = require('../controllers/sectionControllers')
routes.post('/',quizRoute.addQuiz)
routes.post('/find',quizRoute.findQuiz)
routes.post('/section',sectionRoute.addSection)
routes.post('/course',sectionRoute.getCourse)

module.exports = routes
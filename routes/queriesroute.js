const express = require('express')
const routes = express.Router()

const QueriesDetail = require('../controllers/queries')

routes.get('/getqueries',QueriesDetail.noofqueries)
routes.get('/get_queries',QueriesDetail.queriestable)
routes.post('/insert',QueriesDetail.queriesController)

module.exports = routes
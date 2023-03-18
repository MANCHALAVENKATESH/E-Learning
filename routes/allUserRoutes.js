const express = require('express')
const routes = express.Router()

const userDetail = require('../controllers/allUsersControllers')
const upload = require('../middleware/upload')


routes.post('/courseComplete',userDetail.courseCompletion)
routes.post('/',userDetail.addUser)
routes.get('/',userDetail.instructorInfo)
routes.post('/login',userDetail.authUser)
// routes.post('/instructorUpdate',userDetail.studentToUserStep1)
routes.post('/instructorUpdate',upload.single('file'),userDetail.studentToUserStep1)
routes.post('/acceptOrReject',userDetail.acceptInstructor)
routes.post('/status',userDetail.getinstructorInfo)
routes.get('/:email',userDetail.userProfileDetails)
module.exports = routes
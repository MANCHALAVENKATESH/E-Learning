const mongoose = require('mongoose')
const url = 'mongodb+srv://TeamRocket:9997@project.sfwpshx.mongodb.net/LMS'

mongoose.connect(url,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
mongoose.Promise = global.Promise
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
module.exports = {db, mongoose}

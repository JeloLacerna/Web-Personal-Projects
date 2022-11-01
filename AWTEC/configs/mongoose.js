const mongoose = require('mongoose')
const app = require('../app')
const dbURI = 'mongodb+srv://AWTEC-User:awtec@awtec.ys6mkyh.mongodb.net/AWTEC-PROJECT?retryWrites=true&w=majority'
module.exports = mongoose.connect(dbURI)
    .then((result) => {
        console.log('CONNECTED TO DB')

        // Listen for requests
        app.listen(3000)
    })
    .catch((err) => {
        console.log(err)
    })

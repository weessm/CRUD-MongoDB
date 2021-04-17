const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, (err) => {
    if (err) console.log(err)
    else console.log('Successful connection to MongoDB')
})

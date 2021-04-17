const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 8081

const routes = require('./src/routes')
const app = express()

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, (err) => {
    if (err) console.log(err)
    else console.log('Successful connection to MongoDB')
})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT} ~(￣▽￣)~*`)
})
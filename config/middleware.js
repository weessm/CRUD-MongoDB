const express = require('express')
const cors = require('cors')
const routes = require('../src/routes')

module.exports = app => {
    app.use(cors())
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    app.use(routes)
}
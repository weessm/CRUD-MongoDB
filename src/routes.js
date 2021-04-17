const routes = require('express').Router()
const UserController = require('./controller/UserController')

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' })
})

routes.get('/users', UserController.getUsers)
routes.get('/user/:_id', UserController.getUserByID)
routes.delete('/user/:_id', UserController.deleteUser)
routes.put('/user/:_id', UserController.putUser)
routes.post('/users', UserController.postUser)

module.exports = routes
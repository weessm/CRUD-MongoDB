const User = require('../model/User')

module.exports = {
    async getUsers(req, res) {
        const users = await User.find()
        res.status(200).json(users)
    },

    async getUserByID(req, res) {
        const { _id } = req.params
        const user = await User.findOne({ _id })
        res.status(200).json(user)
    },

    async postUser(req, res) {
        const { user_name, user_password } = req.body
        const newUser = await User.create({ user_name, user_password })
        res.status(201).json(newUser)
    },

    async putUser(req, res) {
        const { _id } = req.params
        const { user_name, user_password } = req.body
        const updatedUser = await User.findByIdAndUpdate({ _id }, { user_name, user_password }, { new: true })
        res.status(200).json(updatedUser)
    },

    async deleteUser(req, res) {
        const { _id } = req.params
        const deletedUser = await User.findByIdAndDelete({ _id })
        res.status(204).json(deletedUser)
    }
}
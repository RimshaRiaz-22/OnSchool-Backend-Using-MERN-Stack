const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
const { usersModel } = require('../../../schemas')

const CreateUser = app.post('/create', (req, res) => {
    const session = bcrypt.hashSync(Math.floor(Math.random() * 1000).toString(), 12)
    const hashedPassword = bcrypt.hashSync(req.body.password, 12)
    const user = new usersModel({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        session: session,
        enrolledClasses: [],
    })
    user.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateUser
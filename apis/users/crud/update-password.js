const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const { usersModel } = require('../../../schemas')


const UpdatePassword = app.put('/update-password', (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12)
    const findUser = {
        email: req.body.email
    }
    const updateData = {
        password: hashedPassword,
    }
    const options = {
        new: true
    }
    usersModel.findOneAndUpdate(findUser, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdatePassword
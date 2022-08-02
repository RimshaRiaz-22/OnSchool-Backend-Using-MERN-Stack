const express = require('express')
const app = express()
const { usersModel } = require('../../../schemas')

const LogoutUser = app.put('/logout', (req, res) => {
    usersModel.findByIdAndUpdate(req.body._id, { session: null }, { new: true }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result) {
                res.send(result)
            } else {
                res.sendStatus(404)
            }
        }
    })
})

module.exports = LogoutUser
const express = require('express')
const app = express()
const { usersModel } = require('../../../schemas')

const DeleteUser = app.delete('/delete', (req, res) => {
    usersModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteUser
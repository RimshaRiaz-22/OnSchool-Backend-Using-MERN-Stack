const express = require('express')
const app = express()
const { usersModel } = require('../../../schemas')

const GetUser = app.get('/get', (req, res) => {
    usersModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUser
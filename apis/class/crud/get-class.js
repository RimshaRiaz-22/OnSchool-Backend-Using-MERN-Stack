const express = require('express')
const app = express()
const { classesModel } = require('../../../schemas')

const GetClass = app.get('/get', (req, res) => {
    classesModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetClass
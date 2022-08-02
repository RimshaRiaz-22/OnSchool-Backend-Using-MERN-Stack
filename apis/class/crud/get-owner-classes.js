const express = require('express')
const app = express()
const { classesModel } = require('../../../schemas')

const GetOwnerClasses = app.get('/get-owner-classes', (req, res) => {
    classesModel.find({ owner: req.query._id }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetOwnerClasses
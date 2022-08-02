const express = require('express')
const app = express()
const { classesModel } = require('../../../schemas')

const UpdateClass = app.put('/update', (req, res) => {
    const updateData = {
        name: req.body.name,
        description: req.body.description,
    }
    const options = {
        new: true
    }
    classesModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateClass
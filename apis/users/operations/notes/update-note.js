const express = require('express')
const app = express()
const { notesModel } = require('../../../../schemas')

const UpdateNote = app.put('/update', (req, res) => {
    const updateData = {
        details: req.body.details
    }
    const options = {
        new: true
    }
    notesModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = UpdateNote
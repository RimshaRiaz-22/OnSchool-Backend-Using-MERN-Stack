const express = require('express')
const app = express()
const { streamsModel } = require('../../../../schemas')

const UpdateStream = app.put('/update', (req, res) => {
    const updateData = {
        title: req.body.title,
        details: req.body.details,
    }
    const options = {
        new: true
    }
    streamsModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateStream
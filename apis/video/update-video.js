const express = require('express')
const app = express()
const { videosModel } = require('../../schemas')

const UpdateVideo = app.put('/update', (req, res) => {
    const updateData = {
        path: req.body.path,
        duration: req.body.duration,
    }
    const options = {
        new: true
    }
    videosModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateVideo
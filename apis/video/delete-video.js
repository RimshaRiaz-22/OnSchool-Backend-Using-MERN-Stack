const express = require('express')
const app = express()
const { videosModel } = require('../../schemas')

const DeleteVideo = app.delete('/delete', (req, res) => {
    videosModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteVideo
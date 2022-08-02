const express = require('express')
const app = express()
const { videosModel } = require('../../schemas')

const CreateVideo = app.post('/create', (req, res) => {
    const video = new videosModel({
        class: req.body.class,
        path: req.body.path,
        duration: req.body.duration,
    })
    video.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateVideo
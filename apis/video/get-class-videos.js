const express = require('express')
const app = express()
const { videosModel } = require('../../schemas')

const GetClassVideos = app.get('/get-class-videos', (req, res) => {
    videosModel.find({ class: req.query._id }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetClassVideos
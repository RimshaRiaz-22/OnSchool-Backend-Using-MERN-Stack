const express = require('express')
const app = express()
const { videosModel } = require('../../schemas')

const GetVideo = app.get('/get', (req, res) => {
    videosModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetVideo
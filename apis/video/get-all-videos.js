const express = require('express')
const app = express()
const { videosModel } = require('../../schemas')

const GetAllVideos = app.get('/get-all', (req, res) => {
    videosModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllVideos
const express = require('express')
const app = express()
const { streamsModel } = require('../../../../schemas')

const GetClassStreams = app.get('/get-class-streams', (req, res) => {
    streamsModel.find({ class: req.query._id }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetClassStreams
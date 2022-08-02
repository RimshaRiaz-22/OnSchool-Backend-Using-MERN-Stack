const express = require('express')
const app = express()
const { streamsModel } = require('../../../../schemas')

const GetAllStreams = app.get('/get-all', (req, res) => {
    streamsModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllStreams
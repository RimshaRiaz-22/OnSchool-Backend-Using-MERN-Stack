const express = require('express')
const app = express()
const { streamsModel } = require('../../../../schemas')

const GetStream = app.get('/get', (req, res) => {
    streamsModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetStream
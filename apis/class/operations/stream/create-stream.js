const express = require('express')
const app = express()
const { streamsModel } = require('../../../../schemas')

const CreateStream = app.post('/create', (req, res) => {
    const timeline = new streamsModel({
        class: req.body.class,
        title: req.body.title,
        details: req.body.details,
        date: req.body.date,
    })
    timeline.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateStream
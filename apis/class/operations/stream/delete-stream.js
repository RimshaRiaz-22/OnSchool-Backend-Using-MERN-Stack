const express = require('express')
const app = express()
const { streamsModel } = require('../../../../schemas')

const DeleteStream = app.delete('/delete', (req, res) => {
    streamsModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteStream
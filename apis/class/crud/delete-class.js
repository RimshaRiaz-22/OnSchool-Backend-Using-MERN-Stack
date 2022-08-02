const express = require('express')
const app = express()
const { classesModel } = require('../../../schemas')

const DeleteClass = app.delete('/delete', (req, res) => {
    classesModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteClass
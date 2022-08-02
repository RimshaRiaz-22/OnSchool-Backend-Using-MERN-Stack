const express = require('express')
const app = express()
const { notesModel } = require('../../../../schemas')

const GetUserNotes = app.get('/get-user-notes', (req, res) => {
    notesModel.find({ owner: req.query._id }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = GetUserNotes
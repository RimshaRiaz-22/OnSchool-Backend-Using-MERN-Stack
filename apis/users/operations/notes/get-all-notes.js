const express = require('express')
const app = express()
const { notesModel } = require('../../../../schemas')

const GetAllNotes = app.get('/get-all', (req, res) => {
    notesModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = GetAllNotes
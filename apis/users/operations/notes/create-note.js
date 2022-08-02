const express = require('express')
const app = express()
const { notesModel } = require('../../../../schemas')

const CreateNote = app.post('/create', (req, res) => {
    const note = new notesModel({
        owner: req.body.owner,
        details: req.body.details,
        date: new Date()
    })
    note.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = CreateNote
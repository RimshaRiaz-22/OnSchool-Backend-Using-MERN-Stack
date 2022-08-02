const express = require('express')
const app = express()
const { notesModel } = require('../../../../schemas')

const DeleteNote = app.delete('/delete', (req, res) => {
    notesModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = DeleteNote
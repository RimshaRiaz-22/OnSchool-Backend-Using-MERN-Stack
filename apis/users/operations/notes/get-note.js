const express = require('express')
const app = express()
const { notesModel } = require('../../../../schemas')

const GetNote = app.get('/get', (req, res) => {
    notesModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = GetNote
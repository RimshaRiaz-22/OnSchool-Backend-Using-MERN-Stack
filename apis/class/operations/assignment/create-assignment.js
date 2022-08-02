const express = require('express')
const app = express()
const { assignmentQuestionModel } = require('../../../../schemas')

const CreateAssignment = app.post('/create', (req, res) => {
    const assignment = new assignmentQuestionModel({
        class: req.body.class,
        filePath: req.body.filePath,
        name: req.body.name,
        dueDate: req.body.dueDate,
        numbers: req.body.numbers,
    })
    assignment.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateAssignment
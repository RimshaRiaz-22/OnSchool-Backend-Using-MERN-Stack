const express = require('express')
const app = express()
const { assignmentQuestionModel } = require('../../../../schemas')

const DeleteAssignment = app.put('/update', (req, res) => {
    const updateData = {
        filePath: req.body.filePath,
        name: req.body.name,
        dueDate: req.body.dueDate,
        numbers: req.body.numbers,
    }
    const options = {
        new: true
    }
    assignmentQuestionModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = DeleteAssignment
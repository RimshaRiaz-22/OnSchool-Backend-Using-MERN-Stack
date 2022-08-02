const express = require('express')
const app = express()
const { assignmentSolutionModel } = require('../../../../schemas')

const GradeAssignmentSol = app.put('/grade', (req, res) => {
    const updateData = {
        marks: req.body.marks,
        graded: true,

    }
    assignmentSolutionModel.findByIdAndUpdate(req.body._id, updateData, { new: true }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GradeAssignmentSol
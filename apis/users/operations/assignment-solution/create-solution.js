const express = require('express')
const app = express()
const { assignmentSolutionModel } = require('../../../../schemas')

const CreateAssignmentSol = app.post('/create', (req, res) => {
    const solution = new assignmentSolutionModel({
        submittedBy: req.body.submittedBy,
        assignment: req.body.assignment,
        class: req.body.class,
        marks: null,
        graded: false,
        path: req.body.path,
        submissionTime: req.body.submissionTime,
    })
    solution.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateAssignmentSol
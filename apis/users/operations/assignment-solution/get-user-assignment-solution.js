const express = require('express')
const app = express()
const { assignmentSolutionModel } = require('../../../../schemas')

const GetUserAssignmentSol = app.get('/get-user-assignment-sol', (req, res) => {
    assignmentSolutionModel.find({ submittedBy: req.query.submittedBy, assignment: req.query.assignment, }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserAssignmentSol
const express = require('express')
const app = express()
const { assignmentSolutionModel } = require('../../../../schemas')

const GetAssignmentSols = app.get('/get-assignment-sols', (req, res) => {
    assignmentSolutionModel.find({ assignment: req.query.assignment }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAssignmentSols
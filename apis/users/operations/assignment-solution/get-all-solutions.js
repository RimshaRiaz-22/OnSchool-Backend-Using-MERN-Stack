const express = require('express')
const app = express()
const { assignmentSolutionModel } = require('../../../../schemas')

const GetAllAssignmentSols = app.get('/get-all', (req, res) => {
    assignmentSolutionModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllAssignmentSols
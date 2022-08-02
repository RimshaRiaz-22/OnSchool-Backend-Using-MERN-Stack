const express = require('express')
const app = express()
const { assignmentSolutionModel } = require('../../../../schemas')

const DeleteAssignmentSol = app.delete('/delete', (req, res) => {
    assignmentSolutionModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteAssignmentSol
const express = require('express')
const app = express()
const { assignmentQuestionModel } = require('../../../../schemas')

const DeleteAssignment = app.delete('/delete', (req, res) => {
    assignmentQuestionModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteAssignment
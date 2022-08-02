const express = require('express')
const app = express()
const { assignmentQuestionModel } = require('../../../../schemas')

const GetClassAssignments = app.get('/get-class-assignments', (req, res) => {
    assignmentQuestionModel.find({ class: req.query._id }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetClassAssignments
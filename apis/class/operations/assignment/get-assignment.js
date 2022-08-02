const express = require('express')
const app = express()
const { assignmentQuestionModel } = require('../../../../schemas')

const GetAssignment = app.get('/get', (req, res) => {
    assignmentQuestionModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAssignment
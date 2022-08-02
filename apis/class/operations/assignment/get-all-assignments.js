const express = require('express')
const app = express()
const { assignmentQuestionModel } = require('../../../../schemas')

const GetAllAssignments = app.get('/get-all', (req, res) => {
    assignmentQuestionModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllAssignments
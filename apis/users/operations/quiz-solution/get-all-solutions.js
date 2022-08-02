const express = require('express')
const app = express()
const { quizSolutionModel } = require('../../../../schemas')

const GetAllQuizSols = app.get('/get-all', (req, res) => {
    quizSolutionModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllQuizSols
const express = require('express')
const app = express()
const { quizSolutionModel } = require('../../../../schemas')

const GetQuizSols = app.get('/get-quiz-sols', (req, res) => {
    quizSolutionModel.find({ quiz: req.query.quiz }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetQuizSols
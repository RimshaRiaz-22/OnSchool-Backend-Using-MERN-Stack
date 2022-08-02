const express = require('express')
const app = express()
const { quizSolutionModel } = require('../../../../schemas')

const GetUserQuizSol = app.get('/get-user-quiz-sol', (req, res) => {
    quizSolutionModel.find({ submittedBy: req.query.submittedBy, quiz: req.query.quiz, }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserQuizSol
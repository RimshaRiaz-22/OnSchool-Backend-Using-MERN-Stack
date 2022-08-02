const express = require('express')
const app = express()
const { quizSolutionModel } = require('../../../../schemas')

const CreateQuizSol = app.post('/create', (req, res) => {
    const solution = new quizSolutionModel({
        submittedBy: req.body.submittedBy,
        quiz: req.body.quiz,
        class: req.body.class,
        marks: null,
        graded: false,
        path: req.body.path,
        submissionTime: req.body.submissionTime,
    })
    solution.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateQuizSol
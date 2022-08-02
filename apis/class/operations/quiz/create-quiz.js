const express = require('express')
const app = express()
const { quizQuestionModel } = require('../../../../schemas')

const CreateQuiz = app.post('/create', (req, res) => {
    const quiz = new quizQuestionModel({
        class: req.body.class,
        filePath: req.body.filePath,
        name: req.body.name,
        dueDate: req.body.dueDate,
        numbers: req.body.numbers,
    })
    quiz.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateQuiz
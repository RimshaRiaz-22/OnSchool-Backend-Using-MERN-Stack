const express = require('express')
const app = express()
const { quizQuestionModel } = require('../../../../schemas')

const GetClassQuizzes = app.get('/get-class-quizzes', (req, res) => {
    quizQuestionModel.find({ class: req.query._id }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetClassQuizzes
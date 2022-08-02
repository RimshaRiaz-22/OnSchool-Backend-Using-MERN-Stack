const express = require('express')
const app = express()
const { quizQuestionModel } = require('../../../../schemas')

const GetAllQuizzes = app.get('/get-all', (req, res) => {
    quizQuestionModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllQuizzes
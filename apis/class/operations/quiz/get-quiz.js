const express = require('express')
const app = express()
const { quizQuestionModel } = require('../../../../schemas')

const GetQuiz = app.get('/get', (req, res) => {
    quizQuestionModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetQuiz
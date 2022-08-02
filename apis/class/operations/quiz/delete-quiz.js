const express = require('express')
const app = express()
const { quizQuestionModel } = require('../../../../schemas')

const DeleteQuiz = app.delete('/delete', (req, res) => {
    quizQuestionModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteQuiz
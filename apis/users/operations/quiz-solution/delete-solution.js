const express = require('express')
const app = express()
const { quizSolutionModel } = require('../../../../schemas')

const DeleteQuizSol = app.delete('/delete', (req, res) => {
    quizSolutionModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteQuizSol
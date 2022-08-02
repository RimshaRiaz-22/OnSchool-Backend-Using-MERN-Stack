const express = require('express')
const app = express()
const { quizSolutionModel, assignmentSolutionModel, quizQuestionModel, assignmentQuestionModel } = require('../../../schemas')

const GetUserClassPerformance = app.get('/', (req, res) => {
    let quizQuestions = 0
    let assignmentQuestions = 0
    let quizSols = 0
    let assignmentSols = 0
    quizQuestionModel.find({ class: req.query.class }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            quizQuestions = result.length
            assignmentQuestionModel.find({ class: req.query.class }, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    assignmentQuestions = result.length
                    quizSolutionModel.find({ submittedBy: req.query.submittedBy, class: req.query.class }, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            quizSols = result.length
                            assignmentSolutionModel.find({ submittedBy: req.query.submittedBy, class: req.query.class }, (error, result) => {
                                if (error) {
                                    res.send(error)
                                } else {
                                    assignmentSols = result.length
                                    const total = quizQuestions + assignmentQuestions
                                    const attemted = quizSols + assignmentSols
                                    const percentage = (attemted / total) * 100
                                    const data = {
                                        percentage
                                    }
                                    res.send(data)
                                    // const data = {
                                    //     quizQuestions,
                                    //     assignmentQuestions,
                                    //     quizSols,
                                    //     assignmentSols,
                                    
                                    // }
                                    // res.send(data)
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})
module.exports = GetUserClassPerformance
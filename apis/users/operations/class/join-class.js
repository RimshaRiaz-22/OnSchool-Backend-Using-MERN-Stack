const express = require('express')
const app = express()
const { classesModel, usersModel } = require('../../../../schemas')

const JoinClass = app.put('/join', (req, res) => {
    classesModel.findOne({ classId: req.body.classId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result) {
                const pushStudent = {
                    $push: {
                        enrolledStudents: req.body.user_id
                    }
                }
                classesModel.findOneAndUpdate({ classId: req.body.classId }, pushStudent, (error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        const pushClass = {
                            $push: {
                                enrolledClasses: result._id
                            }
                        }
                        usersModel.findByIdAndUpdate(req.body.user_id, pushClass, (error, result) => {
                            if (error) {
                                res.send(error)
                            } else {
                                res.json({
                                    message: 'Class Successfully Joined',
                                    code: 200
                                })
                            }
                        })
                    }
                })
            } else {
                res.status(404).send('Invalid class code, class not found')
            }
        }
    })
})
module.exports = JoinClass
const express = require('express')
const app = express()
const { classesModel, usersModel } = require('../../../../schemas')

const LeaveClass = app.put('/leave', (req, res) => {
    classesModel.findById(req.body.class_id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result) {
                const pushStudent = {
                    $pull: {
                        enrolledStudents: req.body.user_id
                    }
                }
                classesModel.findByIdAndUpdate(req.body.class_id, pushStudent, (error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        const pushClass = {
                            $pull: {
                                enrolledClasses: result._id
                            }
                        }
                        usersModel.findByIdAndUpdate(req.body.user_id, pushClass, (error, result) => {
                            if (error) {
                                res.send(error)
                            } else {
                                res.json({
                                    message: 'Class Successfully Left',
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
module.exports = LeaveClass
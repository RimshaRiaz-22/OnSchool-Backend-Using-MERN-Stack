const express = require('express')
const app = express()
const { classesModel } = require('../../schemas')

const GetEnrolledStudents = app.get('/get-enrolled-students', (req, res) => {
    classesModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result.enrolledStudents)
        }
    }).select('enrolledStudents').populate('enrolledStudents')
})
module.exports = GetEnrolledStudents
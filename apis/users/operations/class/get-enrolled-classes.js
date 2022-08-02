const express = require('express')
const app = express()
const { usersModel } = require('../../../../schemas')

const GetEnrolledClasses = app.get('/get-enrolled-classes', (req, res) => {
    usersModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result.enrolledClasses)
        }
    }).select('enrolledClasses').populate('enrolledClasses')
})
module.exports = GetEnrolledClasses
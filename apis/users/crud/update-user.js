const express = require('express')
const app = express()
const { usersModel } = require('../../../schemas')

const UpdateUser = app.put('/update-profile', (req, res) => {
    const updateData = {
        name: req.body.name,
    }
    const options = {
        new: true
    }
    usersModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateUser
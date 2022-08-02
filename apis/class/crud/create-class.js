const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
const { classesModel } = require('../../../schemas')

const CreateClass = app.post('/create', (req, res) => {
    const newClass = new classesModel({
        classId: uuidv4(),
        name: req.body.name,
        description: req.body.description,
        owner: req.body.owner,
        enrolledStudents: [],
    })
    newClass.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateClass
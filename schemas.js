const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    date: Date,
    details: String,
})

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    session: String,
    enrolledClasses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes'
    }]
})

const classSchema = mongoose.Schema({
    classId: String,
    name: String,
    description: String,
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    enrolledStudents: [{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }],
})

const videoSchema = mongoose.Schema({
    class: {
        type: mongoose.Types.ObjectId,
        ref: 'classes'
    },
    path: String,
    duration: String,
})

const streamSchema = mongoose.Schema({
    class: {
        type: mongoose.Types.ObjectId,
        ref: 'classes'
    },
    title: String,
    details: String,
    date: Date,
})

const assignmentQuestionSchema = mongoose.Schema({
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes'
    },
    filePath: String,
    name: String,
    dueDate: Date,
    numbers: Number,
})

const quizQuestionSchema = mongoose.Schema({
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes'
    },
    filePath: String,
    name: String,
    dueDate: Date,
    numbers: Number,
})

const assignmentSolutionSchema = mongoose.Schema({
    submittedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    assignment: {
        type: mongoose.Types.ObjectId,
        ref: 'assignments'
    },
    class: {
        type: mongoose.Types.ObjectId,
        ref: 'classes'
    },
    marks: Number,
    graded: Boolean,
    path: String,
    submissionTime: Date,
})

const quizSolutionSchema = mongoose.Schema({
    submittedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    quiz: {
        type: mongoose.Types.ObjectId,
        ref: 'quizzes'
    },
    class: {
        type: mongoose.Types.ObjectId,
        ref: 'classes'
    },
    marks: Number,
    graded: Boolean,
    path: String,
    submissionTime: Date,
})



const notesModel = mongoose.model('notes', noteSchema, 'notes')
const usersModel = mongoose.model('users', userSchema, 'users')
const classesModel = mongoose.model('classes', classSchema, 'classes')

const assignmentQuestionModel = mongoose.model('assignments', assignmentQuestionSchema, 'assignments')
const quizQuestionModel = mongoose.model('quizzes', quizQuestionSchema, 'quizzes')

const assignmentSolutionModel = mongoose.model('assignment_solution', assignmentSolutionSchema, 'assignment_solutions')
const quizSolutionModel = mongoose.model('quiz_solution', quizSolutionSchema, 'quiz_solutions')

const streamsModel = mongoose.model('streams', streamSchema, 'streams')
const videosModel = mongoose.model('videos', videoSchema, 'videos')



module.exports = {
    notesModel,
    usersModel,
    classesModel,
    streamsModel,
    videosModel,
    assignmentQuestionModel,
    quizQuestionModel,
    assignmentSolutionModel,
    quizSolutionModel,
}
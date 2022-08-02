const mongoose = require('mongoose')

// const connection = mongoose.connect('mongodb://localhost:27017/lms', { useNewUrlParser: true }, (error) => {
    const connection = mongoose.connect('mongodb+srv://root:toor@cluster0.h3qrz.mongodb.net/lms?retryWrites=true&w=majority', { useNewUrlParser: true }, (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log('Connection established')
    }
})

module.exports = connection
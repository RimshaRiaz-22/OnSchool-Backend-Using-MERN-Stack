const PORT = 4000
const connection = require('./connection')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/file-uploads', express.static('file-uploads'))
app.use('/image-uploads', express.static('image-uploads'))
app.use('/video-uploads', express.static('video-uploads'))
app.get('/', (req, res) => {
    res.send('Working')
})

app.use('/upload-file', require('./apis/upload-file'))
app.use('/upload-image', require('./apis/upload-image'))
app.use('/upload-image-admin', require('./apis/upload-image-admin'))
app.use('/upload-multiple-images', require('./apis/upload-multiple-images'))
app.use('/upload-video', require('./apis/upload-video'))
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////USER APIS////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.use('/user',
    require('./apis/users/crud/create-user'),                                                   // End Point /create
    require('./apis/users/crud/delete-user'),                                                   // End Point /delete
    require('./apis/users/crud/get-user'),                                                      // End Point /get
    require('./apis/users/crud/login-user'),                                                    // End Point /login
    require('./apis/users/crud/logout-user'),                                                   // End Point /logout
    require('./apis/users/crud/update-password'),                                               // End Point /update-password
    require('./apis/users/crud/update-user'),                                                   // End Point /update-profile
)
app.use('/notes',
    require('./apis/users/operations/notes/create-note'),                                       // End Point /create
    require('./apis/users/operations/notes/delete-note'),                                       // End Point /delete
    require('./apis/users/operations/notes/get-all-notes'),                                     // End Point /get-all
    require('./apis/users/operations/notes/get-note'),                                          // End Point /get
    require('./apis/users/operations/notes/get-user-notes'),                                    // End Point /get-user-notes
    require('./apis/users/operations/notes/update-note'),                                       // End Point /update
)
app.use('/assignment-solution',
    require('./apis/users/operations/assignment-solution/create-solution'),                     // End Point /create
    require('./apis/users/operations/assignment-solution/delete-solution'),                     // End Point /delete
    require('./apis/users/operations/assignment-solution/get-all-solutions'),                   // End Point /get-all
    require('./apis/users/operations/assignment-solution/get-assignment-solutions'),            // End Point /get-assignment-sols
    require('./apis/users/operations/assignment-solution/get-user-assignment-solution'),        // End Point /get-user-assignment-sol
    require('./apis/users/operations/assignment-solution/grade-assignment'),                    // End Point /grade
)
app.use('/quiz-solution',
    require('./apis/users/operations/quiz-solution/create-solution'),                           // End Point /create
    require('./apis/users/operations/quiz-solution/delete-solution'),                           // End Point /delete
    require('./apis/users/operations/quiz-solution/get-all-solutions'),                         // End Point /get-all
    require('./apis/users/operations/quiz-solution/get-quiz-solutions'),                        // End Point /get-quiz-sols
    require('./apis/users/operations/quiz-solution/get-user-quiz-solution'),                    // End Point /get-user-quiz-sol
    require('./apis/users/operations/quiz-solution/grade-quiz'),                                // End Point /grade
)
app.use('/get-user-performance', require('./apis/users/operations/get-user-class-performance'))
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////CLASS APIS///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.use('/class',
    require('./apis/class/crud/create-class'),                                                  // End Point /create
    require('./apis/class/crud/delete-class'),                                                  // End Point /delete
    require('./apis/class/crud/get-class'),                                                     // End Point /get
    require('./apis/class/crud/get-owner-classes'),                                             // End Point /get-owner-classes
    require('./apis/class/crud/update-class'),                                                  // End Point /update
    require('./apis/class/get-class-students'),                                                 // End Point /get-enrolled-students

    require('./apis/users/operations/class/join-class'),                                        // End Point /join
    require('./apis/users/operations/class/leave-class'),                                       // End Point /leave
    require('./apis/users/operations/class/get-enrolled-classes'),                              // End Point /get-enrolled-classes
)
app.use('/stream',
    require('./apis/class/operations/stream/create-stream'),                                    // End Point /create
    require('./apis/class/operations/stream/delete-stream'),                                    // End Point /delete
    require('./apis/class/operations/stream/get-all-streams'),                                  // End Point /get-all
    require('./apis/class/operations/stream/get-class-streams'),                                // End Point /get-class-streams
    require('./apis/class/operations/stream/get-stream'),                                       // End Point /get
    require('./apis/class/operations/stream/update-stream'),                                    // End Point /update
)
app.use('/assignment-question',
    require('./apis/class/operations/assignment/create-assignment'),                            // End Point /create
    require('./apis/class/operations/assignment/delete-assignment'),                            // End Point /delete
    require('./apis/class/operations/assignment/get-all-assignments'),                          // End Point /get-all
    require('./apis/class/operations/assignment/get-assignment'),                               // End Point /get
    require('./apis/class/operations/assignment/get-class-assignments'),                        // End Point /get-class-assignments
    require('./apis/class/operations/assignment/update-assignment'),                            // End Point /update
)
app.use('/quiz-question',
    require('./apis/class/operations/quiz/create-quiz'),                                        // End Point /create
    require('./apis/class/operations/quiz/delete-quiz'),                                        // End Point /delete
    require('./apis/class/operations/quiz/get-all-quizzes'),                                    // End Point /get-all
    require('./apis/class/operations/quiz/get-class-quizzes'),                                  // End Point /get-class-quizzes
    require('./apis/class/operations/quiz/get-quiz'),                                           // End Point /get
    require('./apis/class/operations/quiz/update-quiz'),                                        // End Point /update
)
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Video APIS///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.use('/class-video',
    require('./apis/video/create-video'),                                                       // End Point /create
    require('./apis/video/delete-video'),                                                       // End Point /delete
    require('./apis/video/get-all-videos'),                                                     // End Point /get-all
    require('./apis/video/get-class-videos'),                                                   // End Point /get-class-videos
    require('./apis/video/get-video'),                                                          // End Point /get
    require('./apis/video/update-video'),                                                       // End Point /update
)
app.listen(PORT, () => {
    console.log('Server listening at', PORT)
})
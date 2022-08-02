const express = require('express')
const path = require('path')
const multer = require('multer')
const app = express()

const multerMiddleWareStorage = multer.diskStorage({
    destination: (req, res, callBack) => {
        callBack(null, 'file-uploads/')
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + path.extname(file.originalname))
    }
})
const fileFilter = (req, file, callBack) => {
    if (file.mimetype == 'application/pdf' || file.mimetype == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.mimetype == 'application/vnd.ms-powerpoint') {
        callBack(null, true)
    } else {
        callBack(null, false)
    }
}
const upload = multer({
    storage: multerMiddleWareStorage,
    limits: {
        fileSize: 1000000000 // 1000000000 Bytes = 1000 MB 
    },
    fileFilter: fileFilter,
})

const UploadFile = app.post('/', upload.single('file'), (req, res) => {
    try {
        res.status(200).send({ file: req.file.path })
    } catch (error) {
        res.send(error)
    }
})
module.exports = UploadFile

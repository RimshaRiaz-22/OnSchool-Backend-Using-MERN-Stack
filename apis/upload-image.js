const express = require('express')
const path = require('path')
const multer = require('multer')
const app = express()

const multerMiddleWareStorage = multer.diskStorage({
    destination: (req, res, callBack) => {
        callBack(null, 'image-uploads/')
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + path.extname(file.originalname))
    }
})
const fileFilter = (req, file, callBack) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
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

const UploadImage = app.post('/', upload.single('image'), (req, res) => {
    try {
        const imageUpload = req.file.path
        res.status(200).send(imageUpload)
    } catch (error) {
        res.send(error)
    }
})
module.exports = UploadImage

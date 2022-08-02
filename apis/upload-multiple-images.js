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

const UploadMultipleImages = app.post('/', upload.array('images', 5), (req, res) => { // upload limit of 5 images
    try {
        const images = []
        req.files.filter(image => {
            images.push(image.path)
        })
        res.status(200).send({ images: images })
    } catch (error) {
        res.send(error)
    }
})
module.exports = UploadMultipleImages

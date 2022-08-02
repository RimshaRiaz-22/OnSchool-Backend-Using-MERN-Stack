const express = require('express')
const path = require('path')
const multer = require('multer')
const { getVideoDurationInSeconds } = require('get-video-duration')
const app = express()

const multerMiddleWareStorage = multer.diskStorage({
    destination: (req, res, callBack) => {
        callBack(null, 'video-uploads/')
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + path.extname(file.originalname))
    }
})
const fileFilter = (req, file, callBack) => {
    if (!file.mimetype.match(/\.(mp4|MPEG-4|mkv)$/)) {
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

const UploadVideo = app.post('/', upload.single('video'), (req, res) => {
    try {
        const videoUpload = req.file.path
        getVideoDurationInSeconds(req.file.path)
            .then(duration => {
                // console.log(duration)
                const minutes = Math.floor(duration / 60)
                const seconds = Math.round(duration - minutes * 60)
                // console.log()
                res.status(200).send({
                    path: videoUpload,
                    duration: minutes + ':' + seconds
                })
            })
            .catch(error => {
                console.log(error)
            })
    } catch (error) {
        res.send(error)
    }
})
module.exports = UploadVideo

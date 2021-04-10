const express = require('express');
const router = new express.Router()
const multer = require('multer');
const multerS3 = require('multer-s3')
// const {Storage} = require('@google-cloud/storage');
const path = require('path')
const AWS = require('aws-sdk')
const fs = require('fs')


// require()

// setting s3
const s3 = new AWS.S3({
    signatureVersion: 'v4',
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
})

let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'assassian-bucket',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const ext = path.extname(file.originalname)
            cb(null, `${Date.now().toString()}${ext}`)
        }
    })
})

router.post('/upload', upload.array('photos', 3), function(req, res, next) {
    res.json({files: req.files, length: req.files.length})
    // res.send('Successfully uploaded ' + req.files + ' files!')
})

router.delete('/delete', (req, res) => {
    
    const params = {
        Bucket: 'assassian-bucket', 
        Key: '1618064356089.png'
    }
    s3.deleteObject(params, (err, data)=> {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send("file has been deleted successfully")
    })
})

module.exports = router
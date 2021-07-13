const post=require("./controller")
const router = require("express").Router();
var multer  = require('multer')
var upload = multer()

router.route('/fileanalyse').post(upload.single('upfile'),post.postFile)

module.exports = router
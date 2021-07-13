function postFile(req, res) {
res.json({
            name:req.file.originalname,
            type:req.file. mimetype,
            size:req.file.size
        }) 
}

module.exports = {
    postFile
}

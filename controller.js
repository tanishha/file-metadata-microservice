function postFile(req, res) {

    // const data = req.body;
    // if (req.files) {
    //     data.images = req.files.map(item => { //images ma all array but filename matra
    //         return item.filename
    //     })
    // }
        // const mimeType = req.file.mimetype.split('/')[0];

        res.json({
            name:req.file.originalname,
            type:req.file. mimetype,
            size:req.file.size
        }) 
        console.log(req.file)
    }

module.exports = {
    postFile
}
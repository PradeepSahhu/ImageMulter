

const UploadModel = require("../model/schema");
const fs = require('fs');
exports.home = async(req,res) => {
    const all_images = await UploadModel.find()
    res.render('main',{
        images: all_images
    });
}
exports.uploads = function(req, res,next){
    const files = req.files;

    if(!files){
        const err = new Error('Please choose files');
        err.httpStatusCode = 400;
        return next(err)
    }
    
    //convert images into base64 encoding
    const imgArray = files.map((file) => {
        let img = fs.readFileSync(file.path)

        return encode_img = img.toString("base64")
    })

    let result = imgArray.map((src, index) => {

        //create object to share data in the collection
        let finalImg = {
            filename: files[index].originalname,
            contentType: files[index].mimetype,
            imageBase64: src
        }

        let newUpload = new UploadModel(finalImg);

        return newUpload
            .save()
            .then(() =>{
            return{msg:'${files[index].originalname} Uploaded successfully...!'}
        })
        .catch(err => {
            if(error){
                if(err.name ==='MongoError' && error.code === 11000){
                    return Promise.reject({error: "Duplicate ${files[index].originalname}.File Already Exist!"});
                }
                return Promise.reject({ error: error.message || 'cannot Upload ${files[index].originalname} Something missing!'})
            }
        })
    })

    Promise.all(result)
        .then(msg => {
            res.redirect("/")
        })
        .catch(err => {
            res.json(err)
        })

}
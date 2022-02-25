const multer = require("multer");

//set storage.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads') 
    },
    filename: function (req, file, cb) {
        //image.jpg
        var ext = file.originalname.substring(file.originalname.lastIndexOf('.'))
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      //cb(null, file.fieldname + '-' + uniqueSuffix)
      cb(null, file.fieldname + '-' + Date.now()+ ext)
    }
})
module.exports = store = multer({ storage: storage })
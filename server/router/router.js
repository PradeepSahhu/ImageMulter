
//Programming Principal called: seperation of concern
//thats why we created controller folder.

const route = require('express').Router()
//The ../ refers that .. means it will go back to the parent directory of the current file then / means inside its parent directory 
//here .. (parent directory is server folder) and / means inside the server folder.
const controller = require("../controller/controller")

//middleware
const store = require("../middleware/multer")

//routes.
route.get('/', controller.home);
//Response of your code is in one line but if it is in multiple lines then we will use.

route.post('/uploadmultiple', store.array('uploadedImages'), controller.uploads);
module.exports = route;
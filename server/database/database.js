const mongoose = require("mongoose");

//mongoose connect
const connect = mongoose.connect("mongodb+srv://pradeep:pradeepsahu@cluster0.rmz3x.mongodb.net/imageDB?retryWrites=true&w=majority");


module.exports = connect
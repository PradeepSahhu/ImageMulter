const express = require('express');
const hbs = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();
const path = require("path");

app.use(express.json());

//serving static files.
app.use(express.static(path.join(__dirname,'public')));

//Connect mongoose database
const database = require('./server/database/database');
//setup view engine.
app.set("view engine", "hbs");
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultview: 'default',
    layoutsDir: path.join(__dirname, 'views'),
    partialsDir: path.join(__dirname, 'views/partials')
}));



//calling routes.
app.use('/', require('./server/router/router'))

app.listen(3000, function(){
    console.log("Server is running at port 3000")
});
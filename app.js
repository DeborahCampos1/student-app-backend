const express = require('express');
const cors = require('cors');

//initialize app 
const app = express();
app.use(cors())

const studentsController = require('./controllers/studentsController');

app.use('/students', studentsController);

//route
app.get("/", (request , response) => {
    response.send("Hello World");
});


//export app 
module.exports = app;
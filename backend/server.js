const express = require("express");
const app = express();
require('dotenv').config();
const bookRoutes = require('./routes/bookRoutes.js');
const morgan = require("morgan");
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kkh2003csw:test1234@practicecluster.aotoosr.mongodb.net/?retryWrites=true&w=majority&appName=practiceCluster").then(()=>{
    console.log('Connected to Database');
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    })
})


app.use(express.json());
app.use('/books', bookRoutes);
app.use(morgan('dev'));


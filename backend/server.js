const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const imageRoutes = require('./routes/images')
const mongoose = require("mongoose");

const app = express()
const mangoURL = "mongodb+srv://kkh2003csw:test1234@imagecluster.simojbi.mongodb.net/?retryWrites=true&w=majority&appName=imageCluster"

mongoose.connect(mangoURL).then(()=>{
    console.log("Connected to mongoDB")
    // app.listen
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    })
})

app.use(express.json())
app.use(morgan("dev"))

app.use('/images',imageRoutes)




const mongoose = require("mongoose");
const Image = require("../models/Image");

const ImageController = {
    index: async(req,res)=>{
        let images = await Image.find().sort({createdAt: -1});
        return res.json({
            images
        })
    },
    store: async(req,res)=>{
        try{
            const {name, url} = req.body
            const newImage = await Image.create({
                name,
                url
            })
            return res.json(newImage)
        }catch(e){
            return res.status(400).json({
                error: "Invalid data"
            })
        }

    }
}

module.exports = ImageController
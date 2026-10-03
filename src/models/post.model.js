const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    image:string,
    caption: string,
})

const postModel = mongoose.model("post", postSchema)

module.exports = postModel;
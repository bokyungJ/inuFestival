const mongoose = require("mongoose").set('',true)

const mainSchema = new mongoose.Schema({
    width : Number,
    height : Number
})

module.exports=mongoose.model("main",mainSchema)

const mongoose = require("mongoose")

const boothSchema = new mongoose.Schema({
    name : String,
    boothCode: Number
})

module.exports=mongoose.model("booth",boothSchema)

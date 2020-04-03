const mongoose = require("mongoose")

const sellerSchema = new mongoose.Schema({
    name : {type:String, required:true},
    startTime : {type:String, required:true},
    endTime: {type:String, required:true},
    seat : {type:Boolean, required: true},
    menu : [{
        food: String, 
        price: Number, 
        soldout:Boolean
    }],
    
})

module.exports=mongoose.model("seller",sellerSchema)

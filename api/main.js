//주소/api/main (get) - 포스터 띄우기
const router=require('express').Router();

const Main = require("../models/main")

router.get('/',(req,res)=>{
    //res.json({imguri:'https://via.placeholder.com/150'});
    Main.find({})
})

module.exports=router 
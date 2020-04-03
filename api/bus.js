//주소/api/bus (get) - 셔틀 버스 포스터 띄우기
const router=require('express').Router();

router.get('/',(req,res)=>{
    res.json({imguri:'https://via.placeholder.com/150'});
})

module.exports=router 
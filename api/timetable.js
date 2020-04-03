//주소/api/timetable (get) - 타임테이블 띄우기
const router=require('express').Router();

router.get('/',(req,res)=>{
    res.json({imguri:'https://via.placeholder.com/150'});
})

module.exports=router 
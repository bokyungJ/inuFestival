//주소/api/booth/list (get) - 부스 리스트 띄우기
const router = require('express').Router();

router.get('/',(req,res)=>{
    console.log('list router');
})

module.exports = router;
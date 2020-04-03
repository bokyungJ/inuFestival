//주소/api/booth/menu (get) - 부스 정보 띄우기 (메뉴+품절+만석)
const router = require('express').Router();

router.get('/',(req,res)=>{
    console.log('menu router');
    res.send('menu router');
})

module.exports = router;
//주소/api/booth (get) - 지도+핀 띄우기(좌표)
const router = require('express').Router();

const list = require('./list');
const menu = require('./menu');

router.get('/',(req,res)=>{
    console.log('booth api');
})

router.use('/list', list);
router.use('/menu', menu);

module.exports = router;

//핀 좌표 이용 => 기준이 좌상쪽?
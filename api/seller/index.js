//주소/api/seller (post) - 코드 입력
const router = require('express').Router();

const menu = require('./menu');
const seat = require('./seat');

router.post('/',(req,res)=>{
    res.send(req.body.code);
})

router.use('/menu', menu);
router.use('/seat', seat);

module.exports = router;
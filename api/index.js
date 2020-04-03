
const router=require('express').Router();

const main = require('./main');
const booth = require('./booth');
const seller = require('./seller');
const bus = require('./bus');
const timetable = require('./timetable');

router.use('/main',main);
router.use('/booth', booth);
router.use('/seller',seller);
router.use('/bus', bus);
router.use('/timetable',timetable);

router.get('/',(req,res)=>{
    console.log(req.query.id);
    res.send('api router');
})

module.exports=router 



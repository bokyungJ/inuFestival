//주소/api/seller/menu (post) - 메뉴 입력 + 품절
const router = require('express').Router();

const Menu = require("../../models/seller")

router.post('/',(req,res)=>{

    // req.body.menu.map(data => {
    //     console.log(typeof data);
    // })
    console.log(req.body);
    const menuSchema = new Menu({
        name: req.body.name,
        startTime : req.body.startTime,
        endTime : req.body.endTime,
        seat : req.body.seat,
        menu : req.body.menu
    })
    menuSchema.save().then(res => {console.log(res)});
    console.log('menu router');
    res.send('seller menu');
})


router.post('/test', (req, res) => {
    console.log(req.body.test)
})
module.exports = router;
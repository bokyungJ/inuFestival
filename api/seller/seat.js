//주소/api/seller/seat (post) - 만석 표시
const router = require('express').Router();

const code= require("../../models/booth")

router.post('/',(req,res)=>{
    const codeShcema = new code({
        name: req.body.name,
        boothCode: req.body.boothCode
    })

    codeShcema.save();
    console.log('seat router');
    // Seat.find({seat:req.body.seat})
})

router.get('/', async (req,res) => {
    const ans = await code.find({'boothCode':req.body.boothCode}).exec().then(res => res);
    if(ans.length > 0){
        res.status(200).json({ans: true})
    }else{
        res.status(200).json({ans:false})
    }
})

module.exports = router;
const express = require("express") //모듈을 가져와서 변수에 할당
const app = express() //실행시킨거를 app에 담은거
const bodyParser = require('body-parser')
const port=3000
const api=require('./api');

const mongoose = require('mongoose')
mongoose.connect( 'mongodb://127.0.0.1:27017',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log("Connection to mongoDB");
});

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',api)
app.use('/img',express.static('img'));

//app.get('/api',(request,response)=>{ //express안에 함수, 이 앱에 들어오면 응답, 나중에 이 request를 통해서 클라이언트에서 정보 가져옴
    //'/' : 기본 주소(uri마지막에 슬래시 안넣음),'/api'이러면 그냥 local:3000하면안들어가짐 local:3000/api해야 들어가짐
  //  response.send("express work")
//})

app.get('/',(req,res)=>{
    console.log(req.query.id)
    console.log(req.query.password)
    res.send("this is root index")
})

app.post('/post',(req,res)=>{
    console.log(req.body.id)
    res.send("this is root index")
})

app.listen(port,()=>{console.log("server is open on"+port)}) //서버 구동, 두번째 인자값: 함수들(딱히 안써도 노상관)

var exp=require("express");
var mon=require("mongoose");
var bp=require("body-parser");
const express = require("express");
//const res = require("express/lib/response");
mon.connect("mongodb://127.0.0.1:27017/ms");
var db=mon.connection;
db.on('error',console.log.bind(console,"connection Error!"));
db.once('open',function(callback){
    console.log("connection successfull");
});
var app=express();
app.use(express.static('project'));
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));
app.post('/main',function(req,res){
    var name=req.body.name;
    var upassword=req.body.pw;
    var d={"username":name,"password":password};
    db.collection('emp').insertOne(d,function(err,collection){
            if(err) { throw err; }
            console.log("Record inserted!");
    });
    return res.redirect('REGISTER FORM');
});
app.post('/LOGIN FORM',function(req,res,next,err){
    db.collection('users').findOne({username:req.body.uname},function(err,data){
            if(data){ 
                if(data.password==req.body.pw){
                    res.send({"submit":'register'});
                }
                else{
                    res.send({"success":'InValid Password!'});
                }
            }
            else{
                res.send({"success":'Not Registerd User!'});
            }
    });
});
app.get('/',function(req,res){
    res.redirect('main.html');
}).listen(3000);
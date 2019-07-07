var express=require('express'),
    router=express();


//database
var mongodb = require("mongodb"),
mongoose = require("mongoose");
var url='mongodb://127.0.0.1:27017/Amlaak';
 
mongoose.connect(url,{useNewUrlParser:true},(err,success)=>{
if(err){
console.log('error coonnect to database=',err);
}
else{
console.log('successfuly connect to database');
}
})



    router.get('/',(req,res)=>{
        res.send('hello routes!');
    })



module.exports=router;

var mongodb=require('mongodb'),
mongoose=require('mongoose'),
Schema=mongoose.Schema;

let MessageSchema=new Schema({
  
    _id:{type:String,default:null},
    senderUser:{type:String,default:null},
    email:{type:String,default:null},
    content:{type:String,default:null},
    time:{type:String,default:null},
    date:{type:Number,default:null},
    recieverUser:{type:String,default:null}    
    
 



})

module.exports=mongoose.model('message',MessageSchema);
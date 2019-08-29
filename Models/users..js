var mongodb=require('mongodb'),
mongoose=require('mongoose'),
Schema=mongoose.Schema;

let UsersSchema=new Schema({
    _id:{type:String,default:null},
    username:{type:String,default:null},
    password:{type:String,default:null},
    email:{type:String,default:null},
    isEmailVerified:{type:Boolean,default:false},
    verifyCodeEmail:{type:String,default:null},  
    date:{type:Number,default:null},  
    time:{type:String,default:null}

  



})

module.exports=mongoose.model('users',UsersSchema);
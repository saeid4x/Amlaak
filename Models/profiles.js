var mongodb=require('mongodb'),
mongoose=require('mongoose'),
Schema=mongoose.Schema;

let profileSchema=new Schema({
  
    _id:{type:String,default:null},
    userID:{type:String,default:null},
    name:{type:String,default:null},
    family:{type:String,default:null},
    age:{type:Number,default:null},
    gender:{type:String,default:null},
    avatar:{type:String,default:null},
    aboutme:{type:String,default:null}

     
   
  



})

module.exports=mongoose.model('profile',profileSchema);
var mongodb=require('mongodb'),
mongoose=require('mongoose'),
Schema=mongoose.Schema;

let FavoriteSchema=new Schema({
  
    _id:{type:String,default:null},
    userID:{type:String,default:null},
    adsID:{type:String,default:null},
})

module.exports=mongoose.model('favorites',FavoriteSchema);
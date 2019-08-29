var mongodb=require('mongodb'),
mongoose=require('mongoose'),
Schema=mongoose.Schema;

let categorySchema=new Schema({
  
    _id:{type:String,default:null},
    title:{type:String,default:null}
  
  



})

module.exports=mongoose.model('category',categorySchema);
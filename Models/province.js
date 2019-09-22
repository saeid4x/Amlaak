var mongodb=require('mongodb'),
mongoose=require('mongoose'),
Schema=mongoose.Schema;

let ProvinceSchema=new Schema({    
 
    provinceName:{type:String,default:null},
    cities:{type:Array,default:null},
    provinceID:{type:String,default:null}
})

module.exports=mongoose.model('province',ProvinceSchema);
var mongodb=require('mongodb'),
mongoose=require('mongoose'),
Schema=mongoose.Schema;

let ProvinceSchema=new Schema({    
    0:{type:Object},
    1:{type:Object},
    2:{type:Object},
  
    
   
})

module.exports=mongoose.model('province',ProvinceSchema);
var mongodb=require('mongodb'),
mongoose=require('mongoose'),
Schema=mongoose.Schema;

let testSchema=new Schema({
    images:{type:Array,default:null}

})

module.exports=mongoose.model('test',testSchema);
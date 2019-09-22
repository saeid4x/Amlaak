 var mongodb=require('mongodb'),
    mongoose=require('mongoose'),
    Schema=mongoose.Schema;

    let AdsSchema=new Schema({
        // _id:{type:String,default:null},
        title:{type:String,default:null},
        category:{type:String,default:null},
        Type:{type:String,default:null},
        userID:{type:String,default:null},        
        bazdid:{type:Number,default:0},
        province:{type:String,default:null},
        city:{type:String,default:null},
        address:{type:String,default:null},
        content:{type:String,default:null},
        images:{type:Array,default:null},  //must be array
        date:{type:String,default:null},
        time:{type:String,default:null},
        contactWay:{
            mobile:{type:String,default:null},
            telegram:{type:String,default:null},
            whatsapp:{type:String,default:null},
            email:{type:String,default:null}
          
        },

        emkanat:{type:String,default:null},  //must be array
        features:{
            hoomeCity:{type:Boolean,default:false},
            metrazh:{type:Number,default:null},
            numTanaghe:{type:String,default:null},
            nearMetro:{type:Boolean,default:false}
        },
        depositPrice:{type:Number,default:null}, 
        rentPrice:{type:Number,default:null}, 
        sellPrice:{type:Number,default:null},
         
    


        
        
    })

    module.exports=mongoose.model('ads',AdsSchema)
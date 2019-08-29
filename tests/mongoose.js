var mongoose=require('mongoose');
var validator=require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})

var user=mongoose.model('User',{
    name:{
        type:String,
        require:true,
        trim:true,
        uppercase:true

    },
    age:{
        type:Number,
        validate(value){
            if(value <0){
                throw new Error('age must be a positive number')
            }
        }

    },
    email:{
        type:String,
        require:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email not valid')
            }
        }
    }
    
})


const me=new user({
    name:'saeid',
    age:6,
    email:'saeid@gmail.com'
})

me.save().then(()=>{
console.log(me)
}).catch((err)=>{
    console.log('Error=\t',err);
})
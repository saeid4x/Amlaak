var express=require('express'),
    router=express();

    router.get('/',(req,res)=>{
        res.send('hello users!');
    })

    



module.exports=router;

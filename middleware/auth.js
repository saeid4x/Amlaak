const jwt = require('jsonwebtoken') 
const key =require('../config/keys')


function auth(req,res,next){
    const token=req.headers.token

   

    // check token
    if(!token) res.status(401).json({msg:"No Token, authorization denien"})

    try{
        // verify token
        const decoded=jwt.verify(token,key.jwtSecret)
        req.user=decoded;
          
        next()
    }catch(e){
        res.status(400).json({msg:'token is invalid '})

    }
}

module.exports=auth
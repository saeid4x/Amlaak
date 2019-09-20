var express=require('express'),
    router=express();
var AdsModel=require('../Models/Ads');
var FavoriteModel=require('../Models/favorites');
var ProfileModel=require('../Models/profiles');
var MessageModel=require('../Models/messages');
var ProvinceModel=require('../Models/province');
var UserModel=require('../Models/users');
var bcrypt=require("bcryptjs");
var jwt=require("jsonwebtoken");
var key=require("../config/keys")
var auth=require('../middleware/auth')
var path=require('path')

var multer=require('multer')
 
 // <upload-multer>
var storage=multer.diskStorage({
    destination:'public/uploads/images',
   filename:(req,file,cb)=>{
     cb(null,'post-'+ Date.now()+path.extname(file.originalname));    
   }
 })
 var upload=multer({
     // dest:'../public/uploads/images/',
     storage:storage,
     limits:{fileSize:100 *1024 * 1024} , //100MB,  
   
 })
 
 // <upload-multer />









    router.get('/',(req,res)=>{
        res.send('hello users!');
    })

    // #Route:  api/users
    // #Access: private
    router.post('/:userID/sendAds',upload.any(),(req,res)=>{
        let formData=req.body ;
        let userID=req.body.userID
        let adsImages=[]
         req.files.map((image)=>{
             adsImages.push(image.filename)

         })

      
        console.log('adsImages',adsImages)
        new AdsModel({
            title:formData.title,
             contactWay:{
                 mobile:formData.mobile,
                 telegram:formData.telegram,
                 whatsapp:formData.whatsapp,
                 email:formData.email

             },
             features:{
                hoomeCity:formData.hoomeCity,
                metrazh:formData.metrazh,
                numTanaghe:formData.numTanaghe,
                nearMetro:formData.nearMetro
             },
            category:formData.category,
            Type:formData.type,
            userID:userID,        
            bazdid:1,
            province:formData.province,
            city:formData.city,
            address:formData.address,
            content:formData.content,
            images:adsImages,  //must be array
            date:formData.date,
            time:formData.time,
            depositPrice:formData.depositPrice,
            rentPrice:formData.rentPrice,
            sellPrice:formData.sellPrice,
            numTanaghe:formData.numTanaghe
        }).save((err,data)=>{
            if(data){
                res.json(data)
            }
            else if(err){
                res.send('err during insert new data\n'+err)

            }
        })
    })


    // #Route:  api/users
    // #Access: private
    router.get('/getAds/:userID',(req,res)=>{
        // console.log('@[userID]=',req.params.userID)
        AdsModel.find({userID:req.params.userID})        
            .then((data)=>{
               
                if(data){
                    res.json(data)

                }
            })

    })


    // #Route:  api/users
    // #Access: public
    //get details about ads 
    router.get('/getAd/:adsID',(req,res)=>{
         
        AdsModel.findOne({_id:req.params.adsID})
            .then((data)=>{
                console.log(typeof req.params.adsID)
                if(data){
                    res.json(data)
                }
                
            })
    })

    //  #Route:  api/users
    // #Access: private
    //Remove Ads
    router.get('/remove/:adsID',auth,(req,res)=>{
        AdsModel.findOneAndDelete({_id:req.params.adsID})
            .then((data)=>{
                if(data){
                    res.json({remove:true});

                }
                else if(!data){
                    res.json({remove:false})
                }
            })
    })

    // #Route:  api/users
    // #Access: private
    //edit Ads
    router.post('/modify/:adsID',auth,(req,res)=>{
        let formData=req.body;
        let myData={
            title:formData.title,
             contactWay:{
                 mobile:formData.mobile,
                 telegram:formData.telegram,
                 whatsapp:formData.whatsapp,
                 email:formData.email

             },
             features:{
                hoomeCity:formData.hoomeCity,
                metrazh:formData.metrazh,
                numTanaghe:formData.numTanaghe,
                nearMetro:formData.nearMetro
             },
            category:formData.category,
            Type:formData.type,
            userID:123,        
            bazdid:1,
            province:formData.province,
            city:formData.city,
            address:formData.address,
            content:formData.content,
            images:formData.images,  //must be array
            date:formData.date,
            time:formData.time,
            depositPrice:formData.depositPrice,
            rentPrice:formData.rentPrice,
            sellPrice:formData.sellPrice,
            numTanaghe:formData.numTanaghe
        }
        
        console.log('-----------------------');
        
        AdsModel.findOneAndUpdate({_id:req.params.adsID},{$set:myData},{upsert:true})
            .then((data)=>{
                res.json(data)
            })
    })


    // #Route:  api/users
    // #Access: private
    //get favorite Status 
    router.get('/getFavoriteStatus/:userID/:adsID',auth,(req,res)=>{
        let userID=req.params.userID;
        let adsID=req.params.adsID
        console.log(userID)
        FavoriteModel.findOne({userID,adsID})
            .then((data)=>{
                 
                    
                    res.json(data)
                 
                
            })
    })


    // #Route:  api/users
    // #Access: private
    //add favorite 
    router.post('/addFavorite',auth,(req,res)=>{
        let {userID,adsID}=req.body;
        FavoriteModel.findOneAndUpdate({userID,adsID},{$set:{userID,adsID}},{upsert:true})
            .then((data)=>{
                if(data){
                    res.json(data)
                }
            })
        
        
    })

    // #Route:  api/users
    // #Access: private
    //  remove from favorite 
router.post('/removeFavorite',auth,(req,res)=>{
    let {adsID,userID}=req.body;
    FavoriteModel.findOneAndDelete({adsID,userID})
        .then((data)=>{
            if(data){
                res.json(true)
            }
            
        }).catch((e)=>{
            res.json(false)
        })
    
})

    // #Route:  api/users
    // #Access: private
    //  get favorite ads per user
    router.get('/getFavorites/:userID',auth,(req,res)=>{
        FavoriteModel.find({userID:req.params.userID})
            .then((data)=>{
                if(data){
                    res.json(data)
                }
            })
    })

    // #Route:  api/users
    // #Access: private
    //get profile 
    router.get('/profile/:userID',auth,(req,res)=>{
        ProfileModel.findOne({userID:req.params.userID})
            .then((data)=>{
                if(data){
                    res.json(data)
                }
            })
    })

    // #Route:  api/users
    // #Access: private
    //Edit profile
    router.put('/modifyProfile/:userID',auth,(req,res)=>{

        let myData={

        }


        ProfileModel.findOneAndUpdate({userID:req.params.userID},{$set:req.body},{upsert:true})
            .then((data)=>{
                if(data){
                     
                    res.json(data)
                }
            })

    })


    //message show 
    router.get('/messages',(req,res)=>{
        MessageModel.aggregate([
            {}
        ])
    })
//  get peovince and city 
    router.get('/getProvince',(req,res)=>{

        ProvinceModel.find({})
            .then((data)=>{         
                   
                
            }).catch((err)=>{
                console.log(err)
            })




    })

    // #Route:  api/users
    // #Access: public
    // search ads 
    router.post('/search',(req,res)=>{
        if(req.body.Type === "rent"){
            console.log('rent')
            console.log('req.body',req.body)
            let {category,Type,city,province,minRent,maxRent,minDeposit,maxDeposit,minSellPrice,maxSellPrice}=req.body
            

            // for rent filter  {$gte:minSellPrice,$lte:maxSellPrice}
            AdsModel.aggregate([
                {
                    $match:{category,Type,city,province,rentPrice:{$gte:parseInt(minRent),$lte:parseInt(maxRent)}
                         ,depositPrice:{$gte:parseInt(minDeposit),$lte:parseInt(maxDeposit)} }
                },  
            ],(err,data)=>{
                if(data){
                    console.log('------------------------------------------------')
                    console.log('@rent',data)
                    res.json(data)
                }
            })


        }
        if(req.body.Type === "sell"){
            console.log('sell')
            console.log('req.body',req.body)
            let {category,Type,city,province,minRent,maxRent,minDeposit,maxDeposit,minSellPrice,maxSellPrice}=req.body
            
            // for sell filter  {$gte:minSellPrice,$lte:maxSellPrice}
            AdsModel.aggregate([
                {$match:{category,Type,city,province,sellPrice:{$gte:parseInt(minSellPrice),$lte:parseInt(maxSellPrice)}  }},  
            ],(err,data)=>{
                if(data){
                    console.log('------------------------------------------------')
                    console.log('@sell',data)
                    res.json(data)
                }
            })
        }
       

       
    })

    // api/users/signup
    // register new user
    router.post('/signup',(req,res)=>{

        
        const {username,password,email}=req.body;
        let date=13981050;
        let time="13:50";

        // simple validation
        if(!username || !email || !password){
          return  res.json({ fullMsg :"please fill all form fields ",isValid:false,msg:'blank-field'})
        }

        // check for existing user
        UserModel.findOne({email})
            .then((user)=>{
                if(user){
                  return  res.json({ hasUser :true,isValid:false,msg:"user-exist"})
                }

              var newUser= new UserModel({
                    username,password,email,date,time
                }) 

                //hashing password
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        newUser.password=hash
                        newUser.save().then((user)=>{

                          // generate token base user
                          jwt.sign(
                                {id:user.id,username:user.username},
                                key.jwtSecret ,
                                {expiresIn:3600},
                                (err,token)=>{
                                    if(err) throw err
                                    
                                    return res.json({ 
                                        id:user.id,
                                        password:user.password,
                                        email:user.email,
                                        token,
                                        isValid:true
                                    })
                                }

                                
                                )

                            
                        })
                    })
                })
            })
            })

        
    // sign in users
    // api/users/signin
    router.post('/signin',(req,res)=>{
        const {username,password}=req.body;
        console.log(req.body)
         
        // check exist user
        UserModel.findOne({username})
            .then((user)=>{
                if(!user){
                    return res.json({msg:"this user not exist"})
                }

                // check password with password-hashed
                 bcrypt.compare(password,user.password)
                    .then((isMatch)=>{
                        if(!isMatch) return res.json({msg:"password not correct"})

                        // generate token
                         
                        jwt.sign(
                            {id:user.id,user:user.username},
                            key.jwtSecret,
                            {expiresIn:3600},
                            (err,token)=>{
                                if(err) throw err

                                return res.json({
                                    id:user.id,
                                    email:user.email,
                                    username:user.username,
                                    token,
                                    hasUser:true,
                                    msg:'succssfuly login '
                                })
                            }
                        )
                    })
            })
        
    })


    //test anything
    // api/users/test
    router.get('/test',auth,(req,res)=>{

       res.json({msg:'you are succssfully login2',user: req.user})

    })


    // get user info by id
    // api/users/:id
    router.get('/:id',(req,res)=>{
        UserModel.findOne({_id:req.params.id})
            .then((data)=>{
                if(data){
                    res.json(data)
                }

            })

    })

    // test upload images
    // api/users/getImage
    router.post('/getImages',upload.any(),(req,res)=>{
         let images=[];
         images=req.files;
         images.map((img)=>{
             console.log(img.filename);
            

         });

         console.log('name= ',req.body.name);
    })

    // // test 
    router.get('/test/:id',(req,res)=>{
        console.log(req.params.id)
        let data={
            name:'saeid'
        }
        res.json(data)
    })
module.exports=router;

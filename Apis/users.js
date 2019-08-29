var express=require('express'),
    router=express();
var AdsModel=require('../Models/Ads');
var FavoriteModel=require('../Models/favorites');
var ProfileModel=require('../Models/profiles');
var MessageModel=require('../Models/messages')


 


    router.get('/',(req,res)=>{
        res.send('hello users!');
    })

    router.post('/:userID/sendAds',(req,res)=>{
        let formData=req.body ;
      
        console.log(formData)
        new AdsModel({
            title:formData.title,
             contactWay:{
                 mobile:formData.contactWay.mobile,
                 telegram:formData.contactWay.telegram,
                 whatsapp:formData.contactWay.whatsapp,
                 email:formData.contactWay.whatsapp

             },
             features:{
                hoomeCity:formData.features.hoomeCity,
                metrazh:formData.features.metrazh,
                numTabaghe:formData.features.numTabaghe,
                nearMetro:formData.features.nearMetro
             },
            category:formData.category,
            Type:formData.type,
            userID:formData.userID,        
            bazdid:1,
            province:formData.province,
            city:formData.city,
            address:formData.address,
            content:formData.content,
            images:formData.images,  //must be array
            date:formData.date,
            time:formData.time,
        }).save((err,data)=>{
            if(data){
                res.json(data)
            }
            else if(err){
                res.send('err during insert new data')

            }
        })
    })


    router.get('/:userID/getAds',(req,res)=>{
        AdsModel.find({userID:req.params.userID})
            .then((data)=>{
                if(data){
                    res.json(data)

                }
            })

    })


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

    //Remove Ads
    router.get('/remove/:adsID',(req,res)=>{
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

    //edit Ads
    router.post('/modify/:adsID',(req,res)=>{
        let formData=req.body;
        console.log('-----------------------');
        console.log(formData);
        AdsModel.findOneAndUpdate({_id:req.params.adsID},{$set:formData},{upsert:true})
            .then((data)=>{
                res.json(data)
            })
    })


    //get favorite Status 
    router.get('/getFavoriteStatus/:userID/:adsID',(req,res)=>{
        let userID=req.params.userID;
        let adsID=req.params.adsID
        console.log(userID)
        FavoriteModel.findOne({userID,adsID})
            .then((data)=>{
                if(data){
                    console.log(data)
                    res.json(data)
                }
                
            })
    })


    //add favorite 
    router.post('/addFavorite',(req,res)=>{
        let {userID,adsID}=req.body;
        FavoriteModel.findOneAndUpdate({userID,adsID},{$set:{userID,adsID}},{upsert:true})
            .then((data)=>{
                if(data){
                    res.json(data)
                }
            })
        
        
    })


    //get profile 
    router.get('/profile/:userID',(req,res)=>{
        ProfileModel.findOne({userID:req.params.userID})
            .then((data)=>{
                if(data){
                    res.json(data)
                }
            })
    })
    //Edit profile
    router.put('/modifyProfile/:userID',(req,res)=>{
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

    //test anything
    router.get('/test',(req,res)=>{
      
    })
module.exports=router;

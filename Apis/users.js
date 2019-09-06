var express=require('express'),
    router=express();
var AdsModel=require('../Models/Ads');
var FavoriteModel=require('../Models/favorites');
var ProfileModel=require('../Models/profiles');
var MessageModel=require('../Models/messages');
var ProvinceModel=require('../Models/province');

    router.get('/',(req,res)=>{
        res.send('hello users!');
    })

    router.post('/:userID/sendAds',(req,res)=>{
        let formData=req.body ;
        let user=123
      
        console.log(formData)
        new AdsModel({
            title:formData.title,
             contactWay:{
                 mobile:formData.mobile,
                 telegram:formData.telegram,
                 whatsapp:formData.whatsapp,
                 email:formData.whatsapp

             },
             features:{
                hoomeCity:formData.hoomeCity,
                metrazh:formData.metrazh,
                numTabaghe:formData.numTabaghe,
                nearMetro:formData.nearMetro
             },
            category:formData.category,
            Type:formData.type,
            userID:user,        
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
                res.send('err during insert new data\n'+err)

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
//  get peovince and city 
    router.get('/getProvince',(req,res)=>{

        ProvinceModel.find({})
            .then((data)=>{         
                   
                
            }).catch((err)=>{
                console.log(err)
            })




    })
    //test anything
    router.get('/test',(req,res)=>{
      
    })
module.exports=router;

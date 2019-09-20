import React, { Component } from 'react'

import axios from 'axios';
import Keys from '../config/keys';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MailIcon from '@material-ui/icons/Mail';
 
import '../../src/css/DetailAds.css';
import { Paper,Divider, TextField ,Grid,Button

        } from '@material-ui/core';
import AdminLayout from './layouts/adminLayout';
import keys from '../config/keys';

 

export default class extends Component{

    state={
        adsData:null,
        favoriteStatus:null,
        showRentSegment:'none',
        showRentSegment:'none',
        favoriteColor:'black'
    }
    
    AddFavorite=(adsID,userID)=>{
       

    }

    handleFavorite=()=>{
        let myData={
            userID:123,
            adsID:this.props.match.params.id
        }
        console.log('%%====',this.state.favoriteStatus)
 
         if(this.state.favoriteStatus){
             /*--if favorite status == true
              - remove from favorite
              - favorite-status == false 
            */
           axios.post(keys.backendUrl+'/api/users/removeFavorite',myData)
            .then((data)=>{
                if(data.data){
                    console.log('handle favorite= removed!')
                    this.setState({
                        favoriteStatus:false,
                        favoriteColor: "black"
                    })
                }
            })


         }
          if(!this.state.favoriteStatus || this.state.favoriteStatus == null){
            /* -- else if(favorite-states == false)

                        - add to favorite 
                        - favorite-status == true 
                    */ 
            
            axios.post(Keys.backendUrl+'/api/users/addFavorite',myData)
                .then((data)=>{
                    if(data.data){
                        this.setState({
                            favoriteStatus:true,
                            favoriteColor:'yellow'
                        })
                    }
                })
         }

         
       
    }
  
    componentWillMount(){
         var adsID=this.props.match.params.id;
        axios.get(Keys.backendUrl+'/api/users/getAd/'+adsID)
            .then((data)=>{
                if(data.data){
                     
                    this.setState({
                        adsData:data.data
                    })
                }

                if(data.data.Type == 'rent'){
                    this.setState({
                        showRentSegment:'block',
                        showSellSegment:'none'
                    })
                }
                if(data.data.Type == 'sell'){
                    this.setState({
                        showSellSegment:'block',
                        showRentSegment:'none'
                    })
                }

                
            }).then(()=>{
                axios.get(Keys.backendUrl+'/api/users/getFavoriteStatus/'+123+'/'+adsID)
                    .then((data)=>{
                        if(data.data){                           
                            this.setState({
                                favoriteStatus:true,
                                favoriteColor:'yellow'
                            })  
                            
                        }
                    }) 
            }) 
    }

    render(){
        
         let favoriteStatus=this.state.favoriteStatus? this.state.favoriteStatus:null
         let adsData=this.state.adsData ? this.state.adsData:'';
          let FeaturesAds=adsData.features ? adsData.features : '';
          let ContactWay=adsData.contactWay ? adsData.contactWay:'';
          

        
        return(
            <section className='detailAd'>
                <AdminLayout></AdminLayout>
               {/* 
                    <button className="btn btn-primary" onClick={( )=>this.AddFavorite(this.state.adsData._id,this.state.adsData.userID)}>add Favorite </button>

                    <h3>{this.state.favoriteStatus ==true ? 'favorited':'not favorited'}</h3>
                */} 

    {/* ======================================================== body =========================================================== */}


        <section className="infoPage">
            <Paper style={{width:'82%'}}>
                <center>
                <h4>جزئیات آگهی </h4>
                </center>
            </Paper>
        </section>
            <section className="slider">
                <Paper style={{width:'80%',marginLeft:20}}>
            <Carousel
              width={'100%'}
            
            >
                <div>
                    <img src="/img/1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/img/2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/img/3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/img/4.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </Paper>
            </section>

                
                <section className="digestInfo">
                    
                    <section className="digestInfo-element">
                         <img src="/img/1.jpg" className="cat-icon"/>
                        <div> </div>  
                        <ul>
                            <li>
                                <p className="cityAds"> {adsData.province} - {adsData.city} </p>
                            </li>
                            <li>
                                <p className="complateAddress">
                                          {adsData.address}       
                                </p>
                            </li>


                        </ul>                      

                        

                    </section>

                    <section className="digestInfo-element">
                    <img src="/img/1.jpg" className="cat-icon"/>
                        <div>
                            
                        </div>
                            <section className="rentSegment" style={{display:`${this.state.showRentSegment}`}}>
                                <ul className="priceAds">
                                <li>
                                    <p className="priceAds-text">رهن</p>
                                </li>
                                <li >
                                    <p className="priceAds-price">{adsData.depositPrice}</p>
                                </li>
                                <li>
                                    <p className="priceAds-text">اجاره</p>
                                </li>
                                <li >
                                <p className="priceAds-price">{adsData.rentPrice}</p> 
                                </li>
                            </ul>
                            </section>

                            <section className="sellSegment" style={{display:`${this.state.showSellSegment}`}}>
                                <ul className="priceAds">
                                <li>
                                    <p className="priceAds-text">فروش</p>
                                </li>
                                <li >
                                    <p className="priceAds-price">{adsData.sellPrice}</p>
                                </li>
                                
                            </ul>
                            </section>
                        


                    </section>

                    <section className="digestInfo-element">
                    <img src="/img/1.jpg" className="cat-icon"/>
                        <div>
                            
                        </div>

                        <ul className="type-house">
                        <li>
                            <p className="type-house-text">دسته بندی </p>
                        </li>
                        <li >
                            <p className="type-house-value">{adsData.category}</p>
                        </li>
                        <li>
                            <p className="type-house-text">متراژ</p>
                        </li>
                        <li >
                           <p className="type-house-value"> {FeaturesAds.metrazh}</p> 
                        </li>
                    </ul>

                   

                    </section>
                    
                </section>
                
             

            <section className="contentAds">
                <Paper style={{padding:25,height:'100%',fontSize:20}}>
                <p> 
                {adsData.content}
                </p>

                </Paper>

            </section>
 

            <section className="rightSide">

                <section className="house-feature">
                    <Paper >
                        <div>
                            <h2>مشخصات ملک</h2>
                            <Divider/>
                            <ul>
                                <li> حومه شهر : {FeaturesAds.hoomeCity? 'هست' :'نیست'} </li>
                                <li>  
                                    <Divider/>
                                 </li>

                                <li>  متراژ:   {FeaturesAds.metrazh} </li>

                                <li> 
                                <Divider/>                                    
                                 </li>


                                <li>   نزدیک مترو: {FeaturesAds.nearMetro ? 'هست':'نیست'}</li>
                                <li>  
                                    <Divider/>
                                 </li>
                                <li>  تعداد طبقات:  {FeaturesAds.numTanaghe} </li>
                                <li>  
                                    <Divider/>
                                 </li>

                                 <li>
                                     آسانسور : دارد
                                 </li>
                            </ul>
                        </div>

                    </Paper>

                </section>


                <section className="house-emkanat">
                <Paper >
                        <div>
                            <h2>امکانات ملک</h2>
                            <Divider/>
                            <ul>
                                <li> حومه شهر : {FeaturesAds.hoomeCity ? 'هست':'نیست'}</li>
                                <li>
                                    <Button color="secondary"  variant="outlined"
                                            style={{border:`3px solid ${this.state.favoriteColor}`}}
                                            onClick={this.handleFavorite} > 
                                          add favorite
                                    </Button>
                                         
                                </li>
                                                             
                            </ul>
                        </div>

                    </Paper>
                </section>

                <Paper>
                <section className="ads-owner">
                <img src="/img/1.jpg" className="owner-icon"/>
                        <div>
                            
                        </div>

                        <ul>
                            <li>
                                <p className="adsOwner-name"> اسماعیل اکبری</p>
                            </li>
                            <li>
                                <p className="adsOwner-count">تعداد آگهی : 50 عدد</p>
                            </li>
                        </ul>

                        
                </section>
                </Paper>

            </section>



            <section className="leftSide">

                <section className="contact-way">
                <Paper >
                        <div>
                            <h2>راه هاای ارتباطی</h2>
                            <Divider/>
                            <ul>
                                <li>موبایل : {ContactWay.mobile}</li>
                                <li>  
                                    <Divider/>
                                 </li>

                                <li>   ایمیل : {ContactWay.email}</li>

                                <li> 
                                <Divider/>                                    
                                 </li>


                                <li>   
                                تلگرام: {ContactWay.telegram}
                                </li>
                                <li>  
                                    <Divider/>
                                 </li>
                                <li>   
                                    واتساپ :  {ContactWay.whatsapp}                                   
                                     </li>
                            </ul>
                        </div>

                    </Paper>

                </section>

                <section className="send-message">
                    <Paper>
                        <Grid container sm={12}>
                            <Grid item sm={12}>
                                <h5>ارسال پیام</h5>
                            </Grid>
                            <Grid item sm={12}>
                                <Divider/>
                            </Grid>

                            <Grid item sm={12}>
                                    <Grid container sm={12}>
                                        <Grid item sm={1}>
                                            <p>نام </p>

                                        </Grid>

                                        <Grid item sm={10} >
                                            <TextField 
                                                margin="dense"
                                                variant="outlined" 
                                                style={{width:410}}                                   
                                            />

                                        </Grid>
                                       </Grid>
                            </Grid>

                            <Grid item sm={12}>
                                    <Grid container sm={12}>
                                        <Grid item sm={1}>
                                            <p>ایمیل </p>

                                        </Grid>

                                        <Grid item sm={10} >
                                            <TextField 
                                                margin="dense"
                                                variant="outlined" 
                                                style={{width:410}}                                   
                                            />

                                        </Grid>
                                       </Grid>
                            </Grid>

                            <Grid item sm={12}>
                                <p style={{marginTop:-15}}>
                                    متن پیام
                                </p>    
                            </Grid>

                            <Grid item sm={12}>
                                <TextField 
                                 multiline
                                   margin="normal"
                                   variant="outlined"
                                   rows='4'
                                   style={{width:'78%',marginLeft:20,marginTop:-10}}

                                />
                            </Grid>

                            <Grid item sm={12}>
                                <Button variant="outlined" color="primary">
                                    ارسال فرم
                                </Button>
                            </Grid>
                           
                           
                        </Grid>
                    </Paper>

                </section>



            </section>






       
    {/* ======================================================== end  body =========================================================== */}



            </section>
        )
    }
}
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

 

export default class extends Component{

    state={
        adsData:null,
        favoriteStatus:null
    }
    
    AddFavorite=(adsID,userID)=>{
        let data={
            adsID,userID
        }
        axios.post(Keys.backendUrl+'/api/users/addFavorite',data)
            .then((data)=>{
                if(data.data){
                    this.setState({
                        favoriteStatus:true
                    })
                }
            })

    }
  
    componentWillMount(){
         let adsID=this.props.match.params.id;
        axios.get(Keys.backendUrl+'/api/users/getAd/'+adsID)
            .then((data)=>{
                if(data){
                    console.log(data.data);
                    this.setState({
                        adsData:data.data
                    })
                }
            }).then(()=>{
                axios.get(Keys.backendUrl+'/api/users/getFavoriteStatus/'+this.state.adsData.userID+'/'+this.state.adsData._id)
                    .then((data)=>{
                        if(data.data){
                            this.setState({
                                favoriteStatus:true
                            })
                           
                            
                        }
                    })
            })
    }

    render(){
        // console.log(this.state.favoriteStatus);
       
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
                                <p className="cityAds">خراسان رضوی - مشهد</p>
                            </li>
                            <li>
                                <p className="complateAddress">

                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                 چاپگرها و متون بل
                 که روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان ر
                                    
                                </p>
                            </li>


                        </ul>                      

                        

                    </section>

                    <section className="digestInfo-element">
                    <img src="/img/1.jpg" className="cat-icon"/>
                        <div>
                            
                        </div>

                        <ul className="priceAds">
                        <li>
                            <p className="priceAds-text">رهن</p>
                        </li>
                        <li >
                            <p className="priceAds-price">500,000,000</p>
                        </li>
                        <li>
                            <p className="priceAds-text">اجاره</p>
                        </li>
                        <li >
                           <p className="priceAds-price">500,000</p> 
                        </li>
                    </ul>

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
                            <p className="type-house-value">آپارتمان</p>
                        </li>
                        <li>
                            <p className="type-house-text">متراژ</p>
                        </li>
                        <li >
                           <p className="type-house-value">800 متر</p> 
                        </li>
                    </ul>

                   

                    </section>
                    
                </section>
                
             

            <section className="contentAds">
                <Paper style={{padding:25,height:'100%',fontSize:20}}>
                <p> 
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                 چاپگرها و متون بل
                 که روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد 
                 تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. 
                 در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز
                  شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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
                                <li> حومه شهر : بله</li>
                                <li>  
                                    <Divider/>
                                 </li>

                                <li>  متراژ: 500متر </li>

                                <li> 
                                <Divider/>                                    
                                 </li>


                                <li>   نزدیک مترو: بله</li>
                                <li>  
                                    <Divider/>
                                 </li>
                                <li>  تعداد طبقات: 10 </li>
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
                                <li> حومه شهر : بله</li>
                                                             
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
                                <li>موبایل : 09905086089</li>
                                <li>  
                                    <Divider/>
                                 </li>

                                <li>   ایمیل : saeid.almahdi@gmail.com</li>

                                <li> 
                                <Divider/>                                    
                                 </li>


                                <li>   
                                تلگرام: @saeid4x
                                </li>
                                <li>  
                                    <Divider/>
                                 </li>
                                <li>   
                                    واتساپ : 09905086089                                   
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